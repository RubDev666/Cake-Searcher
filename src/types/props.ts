import { Dispatch, SetStateAction } from 'react';

import { ApiModel, FilterOptions } from '@/utils/db';

export type InitialProps = {
    setCakes: Dispatch<SetStateAction<ApiModel[]>>;
    setGallery: Dispatch<SetStateAction<boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setCategory: Dispatch<SetStateAction<string>>;
    setFilters: Dispatch<SetStateAction<FilterOptions | null>>;
}

export type HeaderProps = {
    backToInit: () => void;
    setOpen: Dispatch<SetStateAction<boolean>>;
    openFilters: boolean;
}

export type GalleryProps = {
    selectedCategory: string;
    cakes: ApiModel[];
    setImg: Dispatch<SetStateAction<ApiModel | null>>;
}

export type FilterModalProps = {
    filterOptions: FilterOptions;
    selectedCategory: string;
    setCakes: Dispatch<SetStateAction<ApiModel[]>>;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export type ImgModalProps = {
    imgSelected: ApiModel;
    setImg: Dispatch<SetStateAction<ApiModel | null>>;
}