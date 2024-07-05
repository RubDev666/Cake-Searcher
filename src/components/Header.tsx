'use client';

import { HeaderProps } from "@/types/props";

export default function Header({backToInit, setOpen, openFilters}: HeaderProps) {
    return (
        <header className="bg-color-5 w-full text-color-1 py-3 px-4 sticky top-0 flex items-center justify-between z-50 shadow-md">
            <button className="bg-color-4 py-1 px-2" onClick={backToInit}>Realizar otra busqueda</button>

            <button className="bg-color-4 py-1 px-2" onClick={() => setOpen(!openFilters)}>Filtros</button>
        </header>
    )
}
