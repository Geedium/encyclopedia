"use client";

import { useEffect, useState } from "react";

import { usePathname } from 'next/navigation';

import { SearchContext } from "@/context/SearchContext";

interface Props {
    children: React.ReactNode;
}

export default function SearchProvider({ children }: Props) {
    const [search, setSearch] = useState("");

    const [asc, setAsc] = useState(false);

    const pathname = usePathname();

    const [hasSearch, setHasSearch] = useState(false);

    useEffect(() => {
        setHasSearch(pathname == "/" ? true : false);
    }, [pathname])

    const toggleAsc = () => { setAsc(!asc); }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return <SearchContext.Provider value={{ search, asc, hasSearch, toggleAsc, handleSearch }}>{children}</SearchContext.Provider>
}
