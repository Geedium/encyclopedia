"use client"

import { createContext, useContext } from 'react';

interface Context {
    search: string;
    hasSearch?: boolean;
    asc?: boolean;
    toggleAsc: () => void;
    clearSearch: () => void;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext({
    handleSearch: () => { },
    hasSearch: false,
    toggleAsc: () => { },
    clearSearch: () => { },
    asc: false,
    search: "",
} as Context);

export const useSearch = () => useContext(SearchContext);
