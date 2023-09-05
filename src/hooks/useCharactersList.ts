import { useCallback, useEffect, useState } from "react";

import { IPeople } from "@/interfaces/IPeople";
import { useSearch } from "@/context/SearchContext";

export default function useCharactersList(people: IPeople[]) {
    const [data, setData] = useState<IPeople[]>(people);

    const { search, handleSearch, asc, toggleAsc } = useSearch();

    const filterPeople = useCallback(() => {
        const filter = people.filter((p: IPeople) => {
            return p.name.toLowerCase().includes(search.toLowerCase())
        }).sort((a: IPeople, b: IPeople) => (a.name > b.name ? asc ? 1 : -1 : asc ? -1 : 1));

        setData(filter);
    }, [asc, people, search]);

    // Handle client-side search results when search handled
    useEffect(() => { !search ? setData(people) : filterPeople() }, [people, filterPeople, search]);

    // Filter people on first render to activate ascending and descending search results
    useEffect(() => { filterPeople() }, [filterPeople]);

    return {
        data,
        search,
        handleSearch,
        asc,
        toggleAsc,
    }
}
