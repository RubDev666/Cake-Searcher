export type Categories = 'Bodas/Aniversario' | 'XV años' | 'Niños' | 'Niñas' | 'Deportes' | 'Series' | 'Animes' | 'Caricaturas' | 'Peliculas' | 'Artistas/Famosos' | 'Musica/Banda' | 'Adultos' | 'Videojuegos' | 'Youtubers/Influencers' | 'TikTok' | 'Dia de las madres' | 'Unicornios' | 'Profesion/Oficio' | 'Animales' | 'Flores' | 'Spiderman' | 'Disney' | 'Memes' | 'Cumpleaños' | 'Dia del niño' | 'Bautizo' | 'Bebés/Baby shower' | 'Chocolate' | 'Futbol';

export type Decorated = 'Fondant' | 'Oblea/Opalina' | 'Normal/Chantilly' | 'Frutas' | 'Dulces' | 'Chocolate' | 'Chispas de colores' | 'Chispas de chocolate' | 'Fudge' | 'Dedicatorias' | 'Flores naturales' | 'Perlitas' | 'Chispas' | 'Cerezas' | 'Flores artificiales' | 'Dulces de chocolate' | 'Nuez' | 'Fresas';

export type ApiModel = {
    id: number;
    category: Categories;
    theme: string | null;
    shape: 'redondo' | 'cuadrado' | 'corazon';
    tier: number;
    decorated: Decorated[];
    references: string[];
    urlImg: string;
}
