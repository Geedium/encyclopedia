"use client";

import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher';


import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";


import type { IPeople } from "@/interfaces/IPeople";

import { getPerson } from '@/queries/Starwars.gql';

import Container from "@/components/Container";


export const dynamic = "force-dynamic";

interface Props {
    params: Params;
}

export default function CharacterDetails({ params }: Props) {
    const { id } = params;
    !id && notFound();

    const { data, error }: { data: any, error: unknown } = useSuspenseQuery<any>(getPerson, {
        variables: { personId: decodeURIComponent(id) },
    });

    return <Container>
        <div>{error ? (
            <p>Ouch.</p>
        ) : !data ? (
            <p>Error occuried.</p>
        ) : (
            <div>
                <div className="font-bold text-xl">{data.person.name}</div>
                <div className="flex flex-row">
                    <Image src={require("@/assets/no-image.png")} width={256} height={256} alt={' '} />
                    <ul>
                        <li>Specie: {data.person.species?.name || "unknown"}</li>
                        <li>Birth Year: {data.person.birthYear}</li>
                        <li>Homeworld: {data.person.homeworld.name}</li>
                    </ul>
                </div>

                <div className="font-bold text-xl">Films:</div>
                <ul>
                    {data.person.filmConnection.films.map((film: any) => {
                        return <li key={film.id}>{film.title}</li>
                    })}
                </ul>
            </div>
        )}</div>
    </Container>
}
