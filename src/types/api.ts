export type Categories = 'Bodas' | 'XV años' | 'Niños' | 'Niñas' | 'Deportes' | 'Series' | 'Animes' | 'Caricaturas' | 'Peliculas' | 'Artistas/Famosos' | 'Musica/Banda' | 'Adultos' | 'Videojuegos' | 'Youtubers/Influencers' | 'TikTok' | 'Dia de las madres' | 'Unicornios' | 'Profesiones' | 'Animales' | 'Flores';

export type Decorated = 'Fondant' | 'Oblea/Opalina' | 'Normal/Chantilly' | 'Frutas' | 'Dulces' | 'Chocolate' | 'Chispas de colores' | 'Chispas de chocolate' | 'Fudge' | 'Dedicatorias' | 'Flores naturales' | 'Perlitas' | 'Chispas';

export type ApiModel = {
    id: number;
    category: Categories;
    theme: string | null;
    shape: 'redondo' | 'cuadrado';
    tier: number;
    decorated: Decorated[];
    references: string[];
    urlImg: string;
}
