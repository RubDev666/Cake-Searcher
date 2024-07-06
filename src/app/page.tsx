'use client';

import { useEffect, useState } from "react";

import { ApiModel, FilterOptions } from "@/utils/db";
import { Spinner } from "@nextui-org/react";

//to animate elements as they disappear from the DOM
import { AnimatePresence } from "framer-motion";

import { FiltersModal, Gallery, Header, Initial, ModalContainer, ErrorMessage } from "@/components";

export default function Home() {
    const [cakes, setCakes] = useState<ApiModel[]>([]);
    const [loading, setLoading] = useState(false);
    const [showGallery, setGallery] = useState(false);
    const [openFilters, setOpen] = useState(false);
    const [selectedCategory, setCategory] = useState('');
    const [filterOptions, setFilters] = useState<FilterOptions | null>(null);
    const [imgSelected, setImg] = useState<ApiModel | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

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
        setErrorMessage('');
        setImg(null);
        setCakes([]);
    }

    const btnToggleFilters = () => {
        setImg(null);
        setOpen(!openFilters);
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
                    <Header backToInit={backToInit} btnToggleFilters={btnToggleFilters} />

                    {<Gallery selectedCategory={selectedCategory} cakes={cakes} setImg={setImg} />}

                    {(openFilters && filterOptions) && (
                        <ModalContainer
                            closeModal={() => setOpen(false)}
                        >
                            <FiltersModal
                                filterOptions={filterOptions} 
                                selectedCategory={selectedCategory} 
                                setCakes={setCakes} setOpen={setOpen} 
                                setErrorMessage={setErrorMessage} 
                            />
                        </ModalContainer>
                    )}

                    {imgSelected && (
                        <ModalContainer
                            closeModal={() => setImg(null)}
                        >
                            <img src={imgSelected.urlImg} alt={imgSelected.category} className='w-[auto] h-[auto] max-h-[70vh] mt-10 mx-auto' />
                        </ModalContainer>
                    )}

                    {errorMessage !== '' && <ErrorMessage message={errorMessage} />}
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
