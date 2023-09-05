"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { getPerson } from '@/queries/Starwars.gql';

import Link from 'next/link';

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

    const decodedID = decodeURIComponent(id);

    const { data, error } = useSuspenseQuery<People>(getPerson, {
        variables: { personId: decodedID },
    });

    return <div>
        <Link href="/">Homepage</Link>
        <div>{JSON.stringify(data)}</div>
    </div>
}
