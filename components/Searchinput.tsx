'use client';

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchInput() {
    const router = useRouter();
    const [searchQuery, setsearchQuery] = useState("");
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <form 
        onSubmit={handleSearch} 
        className="relative flex-1 w-full max-w-md[300px]"
        >
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setsearchQuery(e.target.value)}
                    placeholder="Buscar Curso..."
                    className="w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </form>
    )
}