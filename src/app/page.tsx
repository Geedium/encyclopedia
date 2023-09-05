"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { Characters } from '@/queries/Starwars.gql';

import useCharactersList from "@/hooks/useCharactersList";
import { IPeople } from "@/interfaces/IPeople";

import Card from "@/components/Card";

import { AppBar } from "@/components/AppBar";

export const dynamic = "force-dynamic";

interface Response {
  allPeople: {
    people: IPeople[]
  }
}

export default function Home() {
  const { data: { allPeople: { people } }, error } = useSuspenseQuery<Response>(Characters);

  const { data, asc, search, handleSearch, toggleAsc } = useCharactersList(people);

  return (
    <div>
      <AppBar>
        <input placeholder="Search..." className="search" value={search} onChange={handleSearch} type="text" />
        <button className="mx-4" onClick={() => toggleAsc()}>{asc ? "A-Z" : "Z-A"}</button>
      </AppBar>
      <div className="h-16 mb-8"></div>
      {
        error ? (
          <p>Ouch.</p>
        ) : !data ? (
          <p>Loading...</p>
        ) : data ? (
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4">{data.map(p => {
              return <Card name={p.name} key={p.id} id={p.id} />
            })}</div>
          </div>
        ) : null
      }
    </div>
  )
}
