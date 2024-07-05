import { NextRequest } from "next/server";

import { ApiModel, db, Decorated, GETCategory } from "@/utils/db";
import { GETfilterOptions } from "@/types/globals";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const category = searchParams.get('category');

    const getFilterOptions: GETfilterOptions = {
        theme: searchParams.get('theme'),
        shape: searchParams.get('shape'),
        tier: searchParams.get('tier'),
        decorated: searchParams.get('decorated')
    };

    let CAKES = db.filter((cake) => cake.category === category);

    const isFilter: Set<null | string> = new Set(Object.values(getFilterOptions));
    
    if (Array.from(isFilter).length === 1 && Array.from(isFilter)[0] === null) return Response.json(getCategory(CAKES));
    
    return Response.json(filteredCakes(CAKES, getFilterOptions));
}

function getCategory(CAKES: ApiModel[]): GETCategory {
    //To iterate the "sets" you have to put in"tsconfig" > "compilerOptions" > "target": "es6"
    let setTheme: Set<string> = new Set([]);
    let setShape: Set<string> = new Set([]);
    let setTier: Set<number> = new Set([]);
    let setDecorated: Set<Decorated> = new Set([]);

    CAKES.forEach((cake) => {
        if (cake.theme) setTheme.add(cake.theme);

        setShape.add(cake.shape);
        setTier.add(cake.tier);

        for (let deco of cake.decorated) {
            setDecorated.add(deco);
        }
    })

    const res: GETCategory = {
        cakes: CAKES,
        filterOptions: {
            THEME: Array.from(setTheme),
            SHAPE: Array.from(setShape),
            TIER: Array.from(setTier),
            DECORATED: Array.from(setDecorated)
        }
    }

    return res;
}

function filteredCakes(CAKES: ApiModel[], getFilterOptions: GETfilterOptions): ApiModel[] {
    if(getFilterOptions.theme) CAKES = CAKES.filter((cake) => cake.theme === getFilterOptions.theme);
    if(getFilterOptions.shape) CAKES = CAKES.filter((cake) => cake.shape === getFilterOptions.shape);

    if(getFilterOptions.tier) {
        const tier = getFilterOptions.tier;

        CAKES = CAKES.filter((cake) => cake.tier === parseInt(tier));
    }

    if(getFilterOptions.decorated) {
        const decoratedSplit: any = getFilterOptions.decorated.split('-');

        let notRepeat: Set<ApiModel> = new Set([]);

        decoratedSplit.forEach((decorated: Decorated) => {
            const cakes = CAKES.filter((cake) => cake.decorated.includes(decorated));

            for(let cake of cakes) {
                notRepeat.add(cake);
            }
        });

        CAKES = Array.from(notRepeat);
    }

    return CAKES;
}
