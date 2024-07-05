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