'use client'

import { ChangeEvent, FormEvent, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion";
import { Select, SelectItem } from "@nextui-org/react";

import { getAllCategories } from '@/utils/functions';
import { GETCategory } from '@/types/globals';
import { InitialProps } from '@/types/props';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function Initial({setCakes, setLoading, setCategory, setFilters, setGallery}: InitialProps) {
    const inputSearch = useRef<HTMLInputElement>(null);
    const [selectCurrent, setValue] = useState('');

    const categories = getAllCategories();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        //console.log(inputSearch.current?.value);
    }

    const handleSelectionChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        setCategory(e.target.value);

        setLoading(true);

        await getCakes(e.target.value);

        setLoading(false);
    };

    const getCakes = async (category: string) => {
        try {
            const res: GETCategory = await fetch('/api/cakes?category=' + category).then(res => res.json());

            setCakes(res.cakes);
            setFilters(res.filterOptions);
            setGallery(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.div
            className="custom-container-1 p-4 text-center m-auto"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-color-1 text-center font-bold text-2xl mb-2">Busca tu modelo de pastel favorito</h1>

            <motion.form 
                onSubmit={handleSubmit}
            >
                <span className='text-color-1'>Ingresa el personaje, equipo de futbol, artista, bodas, xv años, o cualquier tematica que le interese.</span>

                <motion.div
                    className="bg-color-1 p-2 flex items-center justify-center gap-3"
                    variants={item}
                >
                    <label htmlFor="s">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-color-4 font-bold text-xl' />
                    </label>

                    <input ref={inputSearch} id='s' type="text" placeholder="¿Que estas buscando?" className='bg-color-1 border-solid border-b-[0.5px] outline-none px-2 py-1 text-color-4' required />
                </motion.div>

                <motion.button 
                    className='bg-color-4 text-color-1 px-6 text-2xl mt-3 py-1 outline-none border-none' 
                    variants={item}
                    type='submit'
                >
                    Buscar
                </motion.button>
            </motion.form>

            <p className='text-xl text-color-1 mt-4'>O explora por categorias:</p>

            <motion.div variants={item} className='w-full'>
                <Select
                    label="Selecciona una categoria"
                    className="w-full text-3xl"
                    radius='none'
                    size='sm'
                    selectedKeys={[selectCurrent]}
                    onChange={(e) => handleSelectionChange(e)}
                >
                    {categories.map((category) => (
                        <SelectItem key={category}>
                            {category}
                        </SelectItem>
                    ))}
                </Select>
            </motion.div>
        </motion.div>
    )
}
