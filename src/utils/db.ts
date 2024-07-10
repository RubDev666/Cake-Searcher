import { ApiModel } from "@/types/api";

export const db: ApiModel[] = [
    { 
        id: 60,
        category: 'Chocolate',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Fudge', 'Chispas de chocolate', 'Dedicatorias'],
        references: ['chocolate', 'fudge', 'chocolates'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720562694/Cakes%20searcher/chocolate/spejoq8ionm7gs5tge9z.webp'
    },
    { 
        id: 59,
        category: 'Adultos',
        theme: 'Cerveza',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Oblea/Opalina'],
        references: ['cerveza', 'adultos', 'adulto', 'tarro', 'cervezas'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720561470/Cakes%20searcher/adultos/imqjkmoofwojyhoe6exf.webp'
    },
    { 
        id: 59,
        category: 'Adultos',
        theme: 'Cerveza',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant'],
        references: ['cerveza', 'adultos', 'adulto', 'tarro', 'cervezas'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720561350/Cakes%20searcher/adultos/urpzuxz0jhqdukjayuak.webp'
    },
    { 
        id: 58,
        category: 'Bodas/Aniversario',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Perlitas', 'Flores naturales'],
        references: ['bodas', 'casados', 'aniversario', 'parejas'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720560857/Cakes%20searcher/bodas/sayztl56nibn9uhz7g0t.webp'
    },
    {
        id: 57,
        category: 'Bebés/Baby shower',
        theme: null,
        shape: 'redondo',
        tier: 2,
        decorated: ['Fondant', 'Oblea/Opalina', 'Perlitas'],
        references: ['bebe', 'bebes', 'baby', 'shower'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720560696/Cakes%20searcher/bebes%20-%20baby%20shower/asyheqzxj80ljukvoctp.webp'
    },
    {
        id: 56,
        category: 'Caricaturas',
        theme: 'Bebés llorones',
        shape: 'redondo',
        tier: 2,
        decorated: ['Fondant', 'Oblea/Opalina', 'Perlitas', 'Chispas de colores'],
        references: ['caricaturas', 'caricatura', 'bebe', 'llorones', 'bebes', 'baby'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720560439/Cakes%20searcher/caricaturas/iautaaqmo3pewvat4gje.webp'
    },
    {
        id: 55,
        category: 'Bautizo',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Oblea/Opalina', 'Perlitas'],
        references: ['bautizo', 'bautizos'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720560338/Cakes%20searcher/bautizo/tvomh3gswhdnm1zthdu7.webp'
    },
    {
        id: 54,
        category: 'Bautizo',
        theme: null,
        shape: 'redondo',
        tier: 2,
        decorated: ['Fondant'],
        references: ['bautizo', 'bautizos'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720558924/Cakes%20searcher/bautizo/mi693peq97osjct6qfzk.webp'
    },
    {
        id: 53,
        category: 'Artistas/Famosos',
        theme: 'Bts',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant'],
        references: ['bts', 'coreanos', 'kpop', 'pop', 'banda', 'artistas', 'famosos'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720554625/Cakes%20searcher/artistas%20famosos/p6lsaggyhjllhthuggh3.webp'
    },
    {
        id: 52,
        category: 'Artistas/Famosos',
        theme: 'Nirvana',
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal/Chantilly'],
        references: ['nirvana', 'musica', 'rock', 'banda', 'artistas', 'famosos'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720554402/Cakes%20searcher/artistas%20famosos/q3l2fjknz2ltcwimm0ua.webp'
    },
    {
        id: 51,
        category: 'Animes',
        theme: 'Demon Slayer',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant'],
        references: ['animes', 'anime', 'demon', 'slayer', 'tanjiro', 'nezuko', 'zenitsu'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720554035/Cakes%20searcher/animes/zxfybghv1euv9ids3iyk.webp'
    },
    { 
        id: 50,
        category: 'Animes',
        theme: 'Pokemon',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Oblea/Opalina'],
        references: ['anime', 'animes', 'pokemon', 'pikachu', 'pokebola'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720553685/Cakes%20searcher/animes/mhgmsnhazk7zf0jmjtbl.webp'
    },
    { 
        id: 49,
        category: 'Animes',
        theme: 'Dragon ball',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Oblea/Opalina'],
        references: ['anime', 'animes', 'dragon', 'ball', 'goku', 'esfera', 'esferas'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720552645/Cakes%20searcher/animes/uvyueh2itfbqwzpjjbht.webp'
    },
    { 
        id: 48,
        category: 'Animes',
        theme: 'One piece',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Oblea/Opalina'],
        references: ['anime', 'animes', 'one', 'piece'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720552421/Cakes%20searcher/animes/lxdakqtsnqdltecqajza.webp'
    },
    { 
        id: 47,
        category: 'Animales',
        theme: 'Dinosaurios',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Dedicatorias'],
        references: ['animales', 'dinosaurios', 'dinosaurio'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720552124/Cakes%20searcher/animales/txowkpexzm3z76t55vzu.webp'
    },
    { 
        id: 46,
        category: 'Animales',
        theme: 'Pajaros',
        shape: 'cuadrado',
        tier: 1,
        decorated: ['Fondant', 'Perlitas', 'Oblea/Opalina'],
        references: ['animales', 'aves', 'pajaros', 'pajaro'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720551863/Cakes%20searcher/animales/wzuznrqnip4bkvmkvbtz.webp'
    },
    { 
        id: 45,
        category: 'Animales',
        theme: 'Flamencos',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Perlitas'],
        references: ['animales', 'flamenco', 'flamencos', 'aves'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720551455/Cakes%20searcher/animales/d8zl2etqcyhoum2tpnpm.webp'
    },
    { 
        id: 44,
        category: 'Videojuegos',
        theme: 'Dead by daylight',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant', 'Dedicatorias'],
        references: ['videojuegos', 'juegos', 'dead', 'daylight'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720550541/Cakes%20searcher/videojuegos/nuwax6qni64b7bumbj3a.webp'
    },
    { 
        id: 43,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant', 'Dedicatorias'],
        references: ['flores', 'flor'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720550315/Cakes%20searcher/flores/h6p3bssxhmm66c3dbbjk.webp'
    },
    { 
        id: 42,
        category: 'Profesion/Oficio',
        theme: 'Profesor/a',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina'],
        references: ['maestra', 'profesora', 'docente'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720550012/Cakes%20searcher/profesion%20-%20oficio/i9rja6onx0gtndbdx9tp.webp'
    },
    {
        id: 41,
        category: 'Disney',
        theme: 'Sirenita',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Perlitas', 'Fondant'],
        references: ['disney', 'ariel', 'princesas','sirenita'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720549897/Cakes%20searcher/disney/nyngyft0zjmrrhqi03mf.webp'
    },
    {
        id: 40,
        category: 'Dia de las madres',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina'],
        references: ['madres', 'madre', 'mama', 'mamas', 'dia'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720547067/Cakes%20searcher/dia%20de%20las%20madres/dwus6rml6sywzeilgvsk.webp'
    },
    {
        id: 39,
        category: 'Spiderman',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant'],
        references: ['spider', 'man', 'spiderman', 'hombre', 'araña', 'marvel', 'heroes', 'super', 'heroe', 'telaraña'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720542690/Cakes%20searcher/spiderman/azzotg7dwqlnbpnckwdi.webp'
    },
    {
        id: 38,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal/Chantilly', 'Perlitas'],
        references: ['flores', 'flor'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720542504/Cakes%20searcher/flores/p60xii9do4iv64aobahi.webp'
    },
    {
        id: 37,
        category: 'Disney',
        theme: 'Frozen',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Chispas de colores', 'Dedicatorias'],
        references: ['disney', 'frozen', 'anna'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720542206/Cakes%20searcher/disney/rrlo27i9bfjsbqnvpvl7.webp'
    },
    {
        id: 36,
        category: 'Dia del niño',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal/Chantilly', 'Chispas de colores', 'Dedicatorias'],
        references: ['niños', 'dia', 'niño', 'niña', 'niñas'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720542141/Cakes%20searcher/dia%20del%20ni%C3%B1o/zuwyteh6rzfxnyv56yrw.webp'
    },
    {
        id: 35,
        category: 'Dia del niño',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal/Chantilly', 'Fondant', 'Chispas de colores', 'Dedicatorias'],
        references: ['niños', 'dia', 'niño', 'niña', 'niñas'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720542012/Cakes%20searcher/dia%20del%20ni%C3%B1o/qwhqzvebcbpkukbku3v6.webp'
    },
    {
        id: 34,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal/Chantilly', 'Perlitas'],
        references: ['flores', 'flor'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720540695/Cakes%20searcher/flores/jnfcfgbibbsz7o4g7fni.webp'
    },
    {
        id: 33,
        category: 'Artistas/Famosos',
        theme: 'Stray kids',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant'],
        references: ['coreanos', 'banda', 'pop', 'stray', 'kids', 'chinos', 'k-pop', 'k'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720540327/Cakes%20searcher/artistas%20famosos/ytmj6bfykuyqbff3hzbe.webp'
    },
    {
        id: 32,
        category: 'Cumpleaños',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal/Chantilly', 'Chispas de colores','Dedicatorias'],
        references: ['feliz', 'cumpleaños', 'felicidades', 'happy', 'birthday'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720539508/Cakes%20searcher/cumplea%C3%B1os/mrhcebvwlwg16n0awh5i.webp'
    },
    {
        id: 31,
        category: 'Animales',
        theme: 'Mariposas',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant', 'Perlitas'],
        references: ['flores', 'flor', 'animales', 'mariposas', 'mariposa'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720539342/Cakes%20searcher/animales/pmzyp9fvg0oejsmosind.webp'
    },
    {
        id: 30,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal/Chantilly', 'Chispas de colores'],
        references: ['flores', 'flor'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720538318/Cakes%20searcher/flores/en7hsvoba9ok9zndoerh.webp'
    },
    {
        id: 29,
        category: 'Niños',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Chispas de colores'],
        references: ['feliz', 'cumpleaños', 'felicidades', 'happy', 'birthday'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720535793/Cakes%20searcher/ni%C3%B1os/lc2oymifauidypbjnsbi.webp'
    },
    {
        id: 28,
        category: 'Cumpleaños',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Perlitas', 'Chispas de colores'],
        references: ['feliz', 'cumpleaños', 'felicidades', 'happy', 'birthday'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720535698/Cakes%20searcher/cumplea%C3%B1os/fiedf4778imictobqegt.webp'
    },
    {
        id: 27,
        category: 'Dia de las madres',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Perlitas', 'Dedicatorias'],
        references: ['feliz', 'cumpleaños', 'felicidades', 'happy', 'birthday', 'mama', 'madre', 'dia', 'madres'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720535538/Cakes%20searcher/dia%20de%20las%20madres/cgte9hwah81x65wdrcnz.webp'
    },
    {
        id: 26,
        category: 'Cumpleaños',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal/Chantilly', 'Dedicatorias'],
        references: ['feliz', 'cumpleaños', 'felicidades', 'happy', 'birthday'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720535178/Cakes%20searcher/cumplea%C3%B1os/xyh2bq3knpspuxkglbdt.webp'
    },
    {
        id: 25,
        category: 'Disney',
        theme: 'Sirenita',
        shape: 'redondo',
        tier: 2,
        decorated: ['Oblea/Opalina', 'Fondant', 'Perlitas'],
        references: ['disney', 'ariel', 'princesas','sirenita'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720534396/Cakes%20searcher/disney/zieg0n50e178qtvaxmlq.webp'
    },
    {
        id: 24,
        category: 'Disney',
        theme: 'Cars/Rayo mcqueen',
        shape: 'cuadrado',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant'],
        references: ['cars', 'rayo', 'mcqueen', 'disney'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720533398/Cakes%20searcher/disney/nr9pskrnfyr3ca3spcu2.webp'
    },
    {
        id: 23,
        category: 'Unicornios',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina'],
        references: ['leon', 'animales', 'unicornio', 'unicornios'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720533234/Cakes%20searcher/unicornios/mvurrovnh8pnrwxitwhh.webp'
    },
    {
        id: 22,
        category: 'Disney',
        theme: 'Leroy y stich',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant', 'Perlitas'],
        references: ['disney', 'leroy', 'stich'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720532413/Cakes%20searcher/disney/rqvsluder2nzcxg4kvnp.webp'
    },
    {
        id: 21,
        category: 'Animales',
        theme: 'Dinosaurios',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Chispas de colores'],
        references: ['dinosaurio', 'dinosaurios', 'bebes'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720478979/Cakes%20searcher/animales/bbc4saxu9kotlt0neiaf.webp'
    },
    {
        id: 20,
        category: 'Memes',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Oblea/Opalina', 'Chispas de colores', 'Perlitas'],
        references: ['meme', 'memes', 'angelica', 'rugrats'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720478777/Cakes%20searcher/memes/qhwfnoskd8tlk4exhmra.webp'
    },
    { 
        id: 19,
        category: 'Bodas/Aniversario',
        theme: null,
        shape: 'cuadrado',
        tier: 1,
        decorated: ['Fondant', 'Oblea/Opalina'],
        references: ['bodas', 'casados'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720478678/Cakes%20searcher/bodas/lptpv0qbtj6bgpflocxe.webp'
    },
    { 
        id: 18,
        category: 'Profesion/Oficio',
        theme: 'Profesor/a',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Oblea/Opalina'],
        references: ['maestra', 'profesora', 'docente'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720478538/Cakes%20searcher/profesion%20-%20oficio/b1do5ghiyuvneuoy2pgm.webp'
    },
    { 
        id: 17,
        category: 'Niños',
        theme: 'Soldados',
        shape: 'redondo',
        tier: 2,
        decorated: ['Fondant'],
        references: ['soldados', 'soldado', 'armas', 'municiones'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720478363/Cakes%20searcher/ni%C3%B1os/dwwgkqsppu9lajdhpwh9.webp'
    },
    {
        id: 16,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Perlitas', 'Flores artificiales'],
        references: ['flores', 'flor'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720478211/Cakes%20searcher/flores/ngyqrck7nwko7cogt29x.webp'
    },
    {
        id: 15,
        category: 'Profesion/Oficio',
        theme: 'Costurera/o',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant'],
        references: ['costurera', 'ropa', 'costura', 'costurero', 'tejer', 'tejedor', 'tejedora'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720478035/Cakes%20searcher/profesion%20-%20oficio/pfxu9uzv2bp9s4vcy9qu.webp'
    },
    {
        id: 14,
        category: 'Memes',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Normal/Chantilly', 'Chispas de colores'],
        references: ['memes', 'adulto', 'adultos', 'meme'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720477582/Cakes%20searcher/memes/odsrctszbhuev1fmy4bm.webp'
    },
    { 
        id: 13,
        category: 'Animes',
        theme: 'Naruto',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant','Chispas de colores'],
        references: ['animes', 'naruto', 'anime'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720476579/Cakes%20searcher/animes/byowl6rkxnscl2kducqa.webp'
    },
    { 
        id: 12,
        category: 'Animales',
        theme: 'Varios animales',
        shape: 'redondo',
        tier: 2,
        decorated: ['Fondant', 'Oblea/Opalina', 'Chocolate'],
        references: ['pescado', 'vaquero', 'vaca', 'vacas', 'pez'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720476246/Cakes%20searcher/animales/ytjoctfwmpaqjxqc9qk1.webp'
    },
    { 
        id: 11,
        category: 'Flores',
        theme: null,
        shape: 'redondo',
        tier: 2,
        decorated: ['Normal/Chantilly'],
        references: ['flores'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720476001/Cakes%20searcher/flores/ngst8ystwicisjlyusli.webp'
    },
    {
        id: 10,
        category: 'Animes',
        theme: 'Demon Slayer',
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant'],
        references: ['animes', 'anime', 'demon', 'slayer', 'tanjiro', 'nezuko', 'zenitsu'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720475824/Cakes%20searcher/animes/gbfhwvf98cpcmygabw12.webp'
    },
    { 
        id: 9,
        category: 'Animales',
        theme: 'Varios animales',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Perlitas'],
        references: ['gato', 'gatitos', 'gatos', 'michis',  'perro', 'perros', 'perritos', 'pollito', 'conejo', 'conejito', 'conejitos', 'conejos', 'animales', 'muchos', 'variados', 'diferentes', 'multiples'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720475275/Cakes%20searcher/animales/riqx86ep7fnfxnguz9jc.webp'
    },
    { 
        id: 8,
        category: 'Series',
        theme: 'Merlina',
        shape: 'redondo',
        tier: 2,
        decorated: ['Oblea/Opalina', 'Chispas de chocolate', 'Perlitas', 'Cerezas'],
        references: ['merlina', 'series', 'wednesday', 'miercoles', 'locos', 'adams', 'addams'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720474978/Cakes%20searcher/series/hvlsigiugy99ax46yso3.webp'
    },
    {
        id: 7,
        category: 'Animales',
        theme: 'Mariposas',
        shape: 'redondo',
        tier: 2,
        decorated: ['Oblea/Opalina', 'Fondant', 'Perlitas'],
        references: ['mariposas', 'mariposa', 'animales'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720472420/Cakes%20searcher/animales/jyjcwlzv3asxnfdcgxni.webp'
    },
    {
        id: 6,
        category: 'Animales',
        theme: 'Dinosaurios',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant'],
        references: ['animales', 'dinosaurios', 'dinosaurio'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720472166/Cakes%20searcher/animales/kj64zijuxajlfrhfdn1y.webp'
    },
    {
        id: 5,
        category: 'Animales',
        theme: 'Mariposas',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Perlitas', 'Oblea/Opalina'],
        references: ['mariposas', 'mariposa', 'animales'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720472017/Cakes%20searcher/animales/qjiayr3ktdsahwhturzn.webp'
    },
    {
        id: 4,
        category: 'Caricaturas',
        theme: 'Chicas super poderosas',
        shape: 'redondo',
        tier: 1,
        decorated: ['Fondant', 'Oblea/Opalina'],
        references: ['chicas', 'poderosas', 'super', 'caricaturas'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720471687/Cakes%20searcher/caricaturas/ttdvx6vwrb0nzyzxsh3m.webp'
    },
    {
        id: 3,
        category: 'Disney',
        theme: 'Sirenita',
        shape: 'redondo',
        tier: 2,
        decorated: ['Fondant', 'Oblea/Opalina'],
        references: ['sirenita', 'disney', 'ariel', 'princesa', 'princesas'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720471316/Cakes%20searcher/disney/qpa0binldbxe31p1mb0y.webp'
    },
    { 
        id: 2,
        category: 'Spiderman',
        theme: null,
        shape: 'cuadrado',
        tier: 1,
        decorated: ['Fondant'],
        references: ['spiderman', 'spider man', 'telaraña', 'fondant', 'hombre araña', 'marvel', 'super', 'heroes', 'peliculas'],  
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720470892/Cakes%20searcher/spiderman/wifafikub2lbsd59blnc.webp'
    },
    {
        id: 1,
        category: 'Niños',
        theme: null,
        shape: 'redondo',
        tier: 1,
        decorated: ['Oblea/Opalina', 'Fondant'],
        references: ['niño', 'niños', 'infantiles', 'infantil', 'pequeños'],
        urlImg: 'https://res.cloudinary.com/ddj3gsspy/image/upload/v1720470047/Cakes%20searcher/ni%C3%B1os/blm9iimhu8e0fdxochaz.webp'
    }
]
