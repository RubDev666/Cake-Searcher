import { Decorated, ApiModel } from "./api";

export type FiltersState = {
    theme: string;
    shape: string;
    tier: string;
    decorated: Set<never>;
}

export type GETfilterOptions = {
    theme: string | null;
    shape: string | null;
    tier: string | null;
    decorated: string | null;
}

export type FilterOptions = {
    //themes: (string | null)[];
    THEME: string[];
    SHAPE: string[];
    TIER: number[];
    DECORATED: Decorated[];
}

export type GETCategory = {
    cakes: ApiModel[];
    filterOptions: FilterOptions;
}