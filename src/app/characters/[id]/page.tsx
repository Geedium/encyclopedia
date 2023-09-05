"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { getPerson } from '@/queries/Starwars.gql';

import Link from 'next/link';

import { notFound } from 'next/navigation';
import { AppBar } from "@/components/AppBar";

export const dynamic = "force-dynamic";

interface People {
    name: string;
    species: {
        name: string;
    } | null;
    filmConnection: {
        films: {
            title: string;
        }[];
    }
    birthYear: string;
    homeworld: {
        title: string;
    };
    id: string;
}

export default function CharacterDetails({ params }: any) {
    const { id } = params;

    if (!id) {
        notFound();
    }

    const { data, error } = useSuspenseQuery<People>(getPerson, {
        variables: { personId: decodeURIComponent(id) },
    });

    return <div>
        <Link href="/">Homepage</Link>
        <div>{error ? (
            <p>Ouch.</p>
        ) : !data ? (
            <p>Error occuried.</p>
        ) : (
            <div>
                <AppBar></AppBar>
                {JSON.stringify(data)}
            </div>
        )}</div>
    </div>
}
