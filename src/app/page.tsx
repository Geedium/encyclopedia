"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { Characters } from '@/queries/Starwars.gql';

import Link from 'next/link';
import { useEffect, useState } from "react";

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

interface Response {
  allPeople: {
    people: People[]
  }
}

export default function Home() {
  const { data, error } = useSuspenseQuery<Response>(Characters);

  const [people, setPeople] = useState<People[]>(data.allPeople.people);

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) {
      setPeople(data.allPeople.people);
      return;
    }

    setPeople(data.allPeople.people.filter((p: People) => {
      return p.name.toLowerCase().includes(search.toLowerCase())
    }));
  }, [data.allPeople.people, search]);

  const handleInput = (e: any) => {
    const lookup = e.target.value;
    setSearch(lookup);
  };

  return (
    <div>
      <p>Search...</p>
      <input className="ml-3 text-black" value={search} onChange={handleInput} type="text" />
      {
        error ? (
          <p>Ouch.</p>
        ) : !data ? (
          <p>Loading...</p>
        ) : data ? (
          <div>{people.map((p: People) => {
            return <Link className="block p-2 bg-slate-50 border border-r-2 text-black" href={`characters/${encodeURIComponent(p.id)}`} key={p.id}>{p.name}</Link>
          })}</div>
        ) : null
      }
    </div>
  )
}
