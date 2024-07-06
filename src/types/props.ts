import { Dispatch, ReactNode, SetStateAction } from 'react';

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
    btnToggleFilters: () => void;
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
    setErrorMessage: Dispatch<SetStateAction<string>>;
}

export type ImgModalProps = {
    imgSelected: ApiModel;
    setImg: Dispatch<SetStateAction<ApiModel | null>>;
}

export type ModalContainerProps = {
    children: React.ReactNode;
    closeModal: () => void;
}

export type ErrorMessageProps = {
    message: string;
}
