"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { Characters } from '@/queries/Starwars.gql';

import useCharactersList from "@/hooks/useCharactersList";
import { IPeople } from "@/interfaces/IPeople";

import Card from "@/components/Card";
import Container from "@/components/Container";

export const dynamic = "force-dynamic";

interface Response {
  allPeople: {
    people: IPeople[]
  }
}

export default function Home() {
  const { data: { allPeople: { people } }, error } = useSuspenseQuery<Response>(Characters);

  const { data } = useCharactersList(people);

  return (
    <div>
      {
        error ? (
          <p>Ouch.</p>
        ) : !data ? (
          <p>Loading...</p>
        ) : data ? (
          <Container>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">{data.map(p => {
              return <Card birthYear={p.birthYear} name={p.name} key={p.id} id={p.id} />
            })}</div>
          </Container>
        ) : null
      }
    </div>
  )
}
