"use client";

import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher';


import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";


import type { IPeople } from "@/interfaces/IPeople";

import { getPerson } from '@/queries/Starwars.gql';

import Container from "@/components/Container";
import Divider from '@/components/Divider';


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

    const table = [
        { key: "Species", value: data.person.species?.name || "unknown" },
        { key: "Hair Color", value: data.person?.hairColor || "unknown" },
        { key: "Gender", value: data.person?.gender || "unknown" },
        { key: "Birth Year", value: data.person?.birthYear || "unknown" },
        { key: "Homeworld", value: data.person?.homeworld?.name || "unknown" },
        { key: "Mass", value: data.person?.mass || 0 },
        { key: "Hair Color", value: data.person?.hairColor || "unknown" },
        { key: "Skin Color", value: data.person?.skinColor || "unknown" },
    ];
    if (data.person?.starshipConnection.starships.length > 0) {
        table.push({ key: "Starships", value: data.person?.starshipConnection.starships.map((s: any) => s.name).join(', ') });
    }
    if (data.person?.vehicleConnection.vehicles.length > 0) {
        table.push({ key: "Vehicles", value: data.person?.vehicleConnection.vehicles.map((v: any) => v.name).join(', ') })
    }

    return <Container>
        <div>{error ? (
            <p>Ouch.</p>
        ) : !data ? (
            <p>Error occuried.</p>
        ) : (
            <div>
                <div className="font-bold text-xl px-4">{data.person?.name}</div>

                <div className="flex md:flex-row flex-col items-start">
                    <Image src={require("@/assets/no-image.png")} width={256} height={256} alt={' '} />
                    <div className="block md:w-full w-10/12 mx-4 md:mx-auto">
                        {
                            table && table.map((item, index) => {
                                return <div key={index} className="flex flex-col">
                                    <div className="flex flex-row mb-2">
                                        <b>{item.key}</b>
                                        <div className="flex-1"></div>
                                        <div className="ml-1 px-2 bg-slate-50 rounded-full">
                                            {item.value}
                                        </div>
                                    </div>
                                    <Divider />
                                </div>
                            })
                        }
                    </div>
                </div>



                <div className="px-2 py-2 mx-2 mt-16 rounded-t-md bg-slate-50 font-bold text-xl block">Films</div>

                <div className="bg-slate-100 w-full rounded-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-8 py-2 px-4">
                        {
                            data.person.filmConnection.films.map((film: any) => {
                                return <div key={film.id} className="flex flex-col">
                                    <b>{film.title}</b>
                                    <Divider />
                                    <div className="font-semibold">{film.openingCrawl}</div>
                                    <div>Release Date: {film.releaseDate}</div>
                                    <div>Director: {film.director}</div>
                                    <div>Producers: {film.producers}</div>
                                    <div>Episode ID: {film.episodeID}</div>
                                    <div>Planets: {film.planetConnection.planets.map((p: any) => p.name).join(', ')}</div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )}</div>
    </Container>
}
