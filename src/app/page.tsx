'use client';

import { useEffect, useState } from "react";

import { ApiModel, FilterOptions } from "@/utils/db";
import { Spinner } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons';

import { FiltersModal, Gallery, Header, Initial, ImgModal } from "@/components";

export default function Home() {
    const [cakes, setCakes] = useState<ApiModel[]>([]);
    const [loading, setLoading] = useState(false);
    const [showGallery, setGallery] = useState(false);
    const [openFilters, setOpen] = useState(false);
    const [selectedCategory, setCategory] = useState('');
    const [filterOptions, setFilters] = useState<FilterOptions | null>(null);
    const [imgSelected, setImg] = useState<ApiModel | null>(null);

    useEffect(() => {
        const bod = document.querySelector('BODY') as HTMLBodyElement;

        if (openFilters || imgSelected) {
            bod.style.overflowY = 'hidden';
        } else {
            bod.style.overflowY = 'auto';
        }
    }, [openFilters, imgSelected])

    const backToInit = () => {
        setOpen(false);
        setGallery(false);
        setImg(null);
        setCakes([]);
    }

    if (loading) return (
        <div className="w-full h-screen flex items-center justify-center p-4">
            <Spinner size="lg" color='primary' />;
        </div>
    )

    return (
        <>
            {showGallery && (
                <>
                    <Header backToInit={backToInit} setOpen={setOpen} openFilters={openFilters} />

                    {<Gallery selectedCategory={selectedCategory} cakes={cakes} setImg={setImg} />}

                    <AnimatePresence>
                        {(openFilters && filterOptions) && <FiltersModal filterOptions={filterOptions} selectedCategory={selectedCategory} setCakes={setCakes} setOpen={setOpen} />}

                        {imgSelected && <ImgModal imgSelected={imgSelected} setImg={setImg} />}
                    </AnimatePresence>

                    {(selectedCategory !== '' && cakes.length === 0) && (
                        <div className="text-center">
                            <p className="text-color-1 text-2xl p-4">No hay resultados relacionados, intenta reajustar los filtros para esta categoria</p>

                            <FontAwesomeIcon icon={faFaceAngry} className="text-color-1 m-auto text-9xl" />
                        </div>
                    )}
                </>
            )}

            {!showGallery && (
                <div className="w-full h-screen flex p-4">
                    <Initial
                        setGallery={setGallery}
                        setCakes={setCakes}
                        setLoading={setLoading}
                        setCategory={setCategory}
                        setFilters={setFilters}
                    />
                </div>
            )}
        </>
    );
}
