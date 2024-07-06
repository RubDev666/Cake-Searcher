'use client';

import { useEffect, useState } from "react";

import { FilterModalProps } from "@/types/props";
import { FiltersState } from "@/types/globals";

import { RadioGroup, Radio, Select, SelectItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ApiModel } from "@/utils/db";

const itemFilter = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function FiltersModal({ filterOptions, selectedCategory, setCakes, setOpen, setErrorMessage }: FilterModalProps) {
    const [filters, setFilters] = useState<FiltersState>({ theme: '', shape: '', tier: '', decorated: new Set([]) });
    const [btnFilter, setBtnFilter] = useState(false);

    useEffect(() => {
        if (filters.theme !== '' || filters.tier !== '' || filters.shape !== '' || Array.from(filters.decorated).length > 0) {
            setBtnFilter(true);
        } else {
            setBtnFilter(false);
        }
    }, [filters])

    const handleFilter = (property: string, e: string) => {
        setFilters({
            ...filters,
            [property]: e
        })
    }

    const getF = async () => {
        const { theme, tier, shape, decorated } = filters;
        const decoratedSelected = Array.from(decorated);

        setCakes([]);

        let query = '';

        if (theme !== '') query = query + `&theme=${theme}`;
        if (shape !== '') query = query + `&shape=${shape}`;
        if (tier !== '') query = query + `&tier=${tier}`;

        if (decoratedSelected.length > 0) {
            let decoratedQuery = '&decorated=';

            for (let i = 0; i < decoratedSelected.length; i++) {
                if (i === 0) {
                    decoratedQuery = decoratedQuery + decoratedSelected[i];
                } else {
                    decoratedQuery = decoratedQuery + '-' + decoratedSelected[i];
                }
            }

            query = query + decoratedQuery;
        }

        try {
            const res: ApiModel[] = await fetch(`/api/cakes?category=${selectedCategory}${query}`).then(res => res.json());

            if (res.length > 0) {
                setErrorMessage('');
            } else {
                setErrorMessage('No hay resultados relacionados, intenta reajustar los filtros para esta categoria');
            }

            setOpen(false);
            setCakes(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="py-4 max-w-[640px] m-auto">
            <h3 className="text-lg font-medium mb-3 text-color-1 text-center">Filtrar por:</h3>

            {filterOptions.THEME.length > 0 && (
                <motion.div
                    variants={itemFilter}
                >
                    <Select
                        label="Tematica"
                        className="w-full text-3xl"
                        radius='none'
                        size='sm'
                        onChange={(e) => handleFilter('theme', e.target.value)}
                    >
                        {filterOptions.THEME.map((theme) => (
                            <SelectItem key={theme} className="capitalize">
                                {theme}
                            </SelectItem>
                        ))}
                    </Select>
                </motion.div>
            )}

            {filterOptions.SHAPE.length === 2 && (
                <motion.div
                    variants={itemFilter}
                >
                    <RadioGroup
                        label="Forma:"
                        orientation="horizontal"
                        className="text-color-4 mt-7 text-lg bg-color-1 p-3"
                        color="secondary"
                        onValueChange={(e) => handleFilter('shape', e)}
                    >
                        {filterOptions.SHAPE.map((shape) => (
                            <Radio key={shape} value={shape}>{shape}</Radio>
                        ))}
                    </RadioGroup>
                </motion.div>
            )}

            {filterOptions.TIER.length > 1 && (
                <motion.div
                    variants={itemFilter}
                >
                    <RadioGroup
                        label="Pisos:"
                        orientation="horizontal"
                        color="secondary"
                        className="text-color-4 mt-7 text-lg bg-color-1 p-3"
                        onValueChange={(e) => handleFilter('tier', e)}
                    >
                        {filterOptions.TIER.map((tier) => (
                            <Radio key={tier} value={tier.toString()}>{tier.toString() + `${tier === 1 ? ' Piso' : ' Pisos'}`} </Radio>
                        ))}
                    </RadioGroup>
                </motion.div>
            )}

            <motion.div
                variants={itemFilter}
            >
                <div className="bg-color-1 w-full mt-5 p-0 flex flex-col flex-wrap ax-w-[300px] ">
                    <Select
                        label="Decorado con:"
                        selectionMode="multiple"
                        className="w-full"
                        onSelectionChange={(e: any) => handleFilter('decorated', e)}
                    >
                        {filterOptions.DECORATED.map((decorated) => (
                            <SelectItem key={decorated} className="capitalize">
                                {decorated}
                            </SelectItem>
                        ))}
                    </Select>

                    <div>
                        {Array.from(filters.decorated).map((val: string) => (
                            <p key={val} className="bg-color-5 text-color-1 inline-block m-1 p-1">{val}</p>
                        ))}
                    </div>
                </div>

            </motion.div>

            {btnFilter && <button className="bg-color-4 text-color-1 p-2 text-2xl w-full mt-5 tracking-widest" onClick={getF}>Filtrar</button>}
        </div>
    )
}
