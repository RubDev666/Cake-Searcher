type Categories = 'Bodas' | 'XV años' | 'Niños' | 'Niñas' | 'Deportes' | 'Series' | 'Animes' | 'Caricaturas' | 'Peliculas' | 'Artistas/Famosos' | 'Musica/Banda' | 'Adultos' | 'Videojuegos' | 'Youtubers/Influencers' | 'TikTok' | 'Dia de las madres' | 'Unicornios' | 'Profesiones' | 'Animales' | 'Flores';

export type Decorated = 'fondant' | 'Oblea / Opalina' | 'Normal / Chantilly' | 'frutas' | 'dulces' | 'chocolate' | 'chispas de colores' | 'chispas de chocolate' | 'fudge' | 'dedicatorias' | 'flores naturales' | 'perlitas' | 'chispas';

export type ApiModel = {
    id: number;
    category: Categories;
    theme: string | null;
    shape: 'redondo' | 'cuadrado';
    tier: number;
    decorated: Decorated[];
    tags: string[];
    urlImg: string;
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

export const categories: Categories[] = [
    'Animales',
    'Artistas/Famosos',
    'Flores',
];

export const db: ApiModel[] = [
    { 
        id: 25,
        category: 'Animales',
        theme: 'Patos',
        shape: 'cuadrado',
        tier: 1,
        decorated: ['Normal / Chantilly', 'Oblea / Opalina', 'fondant'],
        tags: ['patos', 'pato', 'patitos'],  
        urlImg: '/cakes/IMG_20230126_072251.jpg'
    },
    { 
        id: 24,
        category: 'Animales',
        theme: 'Vacas',
        shape: 'cuadrado',
        tier: 1,
        decorated: ['Normal / Chantilly', 'Oblea / Opalina'],
        tags: ['vaca', 'vaquita', 'vacas'],  
        urlImg: '/cakes/IMG_20221003_174345.jpg'
    },
    {
        id: 23,
        category: 'Flores',
        theme: null,
        shape: 'cuadrado',
        tier: 1,
        decorated: ['dedicatorias', 'perlitas', 'Normal / Chantilly'],
        tags: ['flor', 'flores', 'rosa'],  
        urlImg: '/cakes/IMG_20211127_164425.jpg'
    },
    {
        id: 22,
        category: 'Flores',
        theme: null,
        shape: 'cuadrado',
        tier: 1,
        decorated: ['flores naturales', 'fondant', 'dedicatorias', 'chispas'],
        tags: ['flor', 'flores', 'rosa'],  
        urlImg: '/cakes/IMG_20200913_085202.jpg'
    },
    {
        id: 21,
        category: 'Artistas/Famosos',
        theme: 'michael jackson',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant', 'Oblea / Opalina', 'perlitas'],
        tags: ['musica', 'michael', 'jackson', 'pop'],
        urlImg: '/cakes/IMG_20211121_123624.jpg'
    },
    {
        id: 20,
        category: 'Artistas/Famosos',
        theme: 'bts',
        shape: 'redondo',
        tier: 2,
        decorated: ['fondant', 'Oblea / Opalina'],
        tags: ['bts', 'coreanos', 'k-pop', 'k pop'],
        urlImg: '/cakes/IMG_20211016_122357.jpg'
    },
    { 
        id: 19,
        category: 'Animales',
        theme: 'Perros',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant', 'Oblea / Opalina'],
        tags: ['perros', 'perritos'],  
        urlImg: '/cakes/IMG_20210613_104853.jpg'
    },
    { 
        id: 18,
        category: 'Animales',
        theme: 'Perros',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant'],
        tags: ['perro', 'perrito'],  
        urlImg: '/cakes/IMG_20201115_144247.jpg'
    },
    { 
        id: 17,
        category: 'Animales',
        theme: 'Flamencos',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant', 'perlitas'],
        tags: ['flamenco', 'flamencos'],  
        urlImg: '/cakes/IMG_20201107_162631.jpg'
    },
    {
        id: 16,
        category: 'Artistas/Famosos',
        theme: 'marshmello',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant'],
        tags: ['dj', 'electronica', 'mashmello'],
        urlImg: '/cakes/IMG_20201102_115741.jpg'
    },
    {
        id: 15,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal / Chantilly'],
        tags: ['flor', 'flores'],  
        urlImg: '/cakes/IMG_20201023_100444.jpg'
    },
    {
        id: 14,
        category: 'Artistas/Famosos',
        theme: 'one direction',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea / Opalina', 'fondant'],
        tags: ['one direction', 'harry', 'grupo', 'boy band'],
        urlImg: '/cakes/IMG_20201007_100123.jpg'
    },
    { 
        id: 13,
        category: 'Animales',
        theme: 'gatos',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant'],
        tags: ['gato', 'gatitos', 'figuras', 'gato negro'],  
        urlImg: '/cakes/IMG_20200806_150540.jpg'
    },
    { 
        id: 12,
        category: 'Animales',
        theme: 'Flamencos',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant', 'perlitas'],
        tags: ['flamenco', 'flamencos'],  
        urlImg: '/cakes/IMG_20200802_151428.jpg'
    },
    { 
        id: 11,
        category: 'Animales',
        theme: 'Perros',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant'],
        tags: ['perro', 'perrito'],  
        urlImg: '/cakes/IMG_20200721_151621.jpg'
    },
    {
        id: 10,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal / Chantilly'],
        tags: ['flor', 'flores'],  
        urlImg: '/cakes/IMG_20200609_100234.jpg'
    },
    { 
        id: 9,
        category: 'Animales',
        theme: 'Mariposas',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant', 'Oblea / Opalina', 'perlitas'],
        tags: ['mariposas', 'mariposa'],  
        urlImg: '/cakes/20231125_182245.jpg'
    },
    { 
        id: 8,
        category: 'Animales',
        theme: 'Conejos',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant'],
        tags: ['conejo', 'figura de conejo', 'figura conejo'],  
        urlImg: '/cakes/20231118_150809.jpg'
    },
    {
        id: 7,
        category: 'Artistas/Famosos',
        theme: 'kiss',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea / Opalina', 'fondant'],
        tags: ['rock', 'banda', 'kiss', 'banda de rock'],
        urlImg: '/cakes/20231021_121350.jpg'
    },
    {
        id: 6,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 3,
        decorated: ['fondant', 'Oblea / Opalina'],
        tags: ['flor', 'flores', 'tres pisos'],  
        urlImg: '/cakes/20220806_162346.jpg'
    },
    {
        id: 5,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 2,
        decorated: ['fondant', 'perlitas'],
        tags: ['flor', 'flores', 'dos pisos'],  
        urlImg: '/cakes/20220730_125110.jpg'
    },
    {
        id: 4,
        category: 'Artistas/Famosos',
        theme: 'bts',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant', 'Oblea / Opalina'],
        tags: ['bts', 'coreanos', 'k-pop', 'k pop'],
        urlImg: '/cakes/20220619_122116.jpg'
    },
    {
        id: 3,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['flores naturales', 'perlitas'],
        tags: ['flor natural', 'flores naturales', 'flor', 'flores'],  
        urlImg: '/cakes/20220527_124514.jpg'
    },
    { 
        id: 2,
        category: 'Animales',
        theme: 'gatos',
        shape: 'redondo',
        tier: 1,
        decorated: ['fondant'],
        tags: ['gato', 'gatitos', 'figuras'],  
        urlImg: '/cakes/20220522_113019.jpg'
    },
    {
        id: 1,
        category: 'Artistas/Famosos',
        theme: 'bts',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea / Opalina', 'fondant'],
        tags: ['bts', 'coreanos', 'k-pop', 'k pop'],
        urlImg: '/cakes/20220603_120652.jpg'
    }
]
