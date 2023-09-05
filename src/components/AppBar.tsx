"use client";

import { useState } from "react";

import { useSearch } from "@/context/SearchContext";
import Link from "next/link";

import Logo from "./Logo";

import MenuIcon from "./icons/MenuIcon";

export function AppBar() {
    const { search, handleSearch, asc, toggleAsc, clearSearch, hasSearch } = useSearch();

    const [menuItem, setMenuItem] = useState(false);

    return <div className="h-16 mb-8">
        <div className="h-16 fixed px-4 bg-slate-50 right-0 left-0 top-0 drop-shadow-md flex items-center">
            <div className="flex flex-row items-center">
                <Link href="/" className="mr-8 font-semibold">
                    <Logo height={75} />
                </Link>
                <Link className="hidden md:inline-block" href="/">Home</Link>
            </div>
            <div className="flex-1"></div>
            <button onClick={() => {
                setMenuItem(!menuItem)
            }} className="inline-block md:hidden"><MenuIcon /></button>
            {
                hasSearch && (
                    <div className="md:flex flex-row hidden">
                        <button className="mx-4" onClick={() => clearSearch()}>🧻</button>
                        <input value={search} onChange={handleSearch} placeholder="Search..." className="search" type="text" />
                        <button className="mx-4" onClick={() => toggleAsc()}>{asc ? "A-Z" : "Z-A"}</button>
                    </div>
                )
            }
        </div>
        {
            menuItem && (
                <div className="bg-slate-100 overflow-y-auto fixed top-16 z-10 left-0 right-0 py-4 flex flex-col items-center">
                    <div className="flex flex-row mt-4 mb-4">
                        <button className="mx-4" onClick={() => clearSearch()}>🧻</button>
                        <input value={search} onChange={handleSearch} placeholder="Search..." className="search" type="text" />
                        <button className="mx-4" onClick={() => toggleAsc()}>{asc ? "A-Z" : "Z-A"}</button>
                    </div>
                    <Link className="px-4" href="/">Home</Link>
                </div>
            )
        }

    </div>
}
