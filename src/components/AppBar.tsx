"use client";

import { useSearch } from "@/context/SearchContext";
import Link from "next/link";

interface Props {

}

export function AppBar({ }: Props) {
    const { search, handleSearch, asc, toggleAsc, hasSearch } = useSearch();

    return <div className="h-16 mb-8">
        <div className="h-16 fixed px-4 bg-slate-50 right-0 left-0 top-0 drop-shadow-md flex items-center">
            <div className="flex flex-row">
                <div className="mr-8 font-semibold">Star Wars Characters Encyclopedia</div>
                <Link href="/">Home</Link>
            </div>
            <div className="flex-1"></div>
            {
                hasSearch && (
                    <div className="flex flex-row">
                        <input value={search} onChange={handleSearch} placeholder="Search..." className="search" type="text" />
                        <button className="mx-4" onClick={() => toggleAsc()}>{asc ? "A-Z" : "Z-A"}</button>
                    </div>
                )
            }
        </div>
    </div>
}
