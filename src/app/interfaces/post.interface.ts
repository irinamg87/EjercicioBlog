export interface Post {
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;
    categoria: string;
}

export const POSTS: Post[] = [
    {
        titulo: 'Recetas saludables',
        texto: 'Comer sano no tiene que ser aburrido. Aquí te dejamos algunas recetas deliciosas y saludables.',
        autor: 'Ana Gómez',
        imagen: 'https://source.unsplash.com/AZMkC8vJEF0',
        fecha: new Date('2022-03-01'),
        categoria: 'Cocina'
    },
    {
        titulo: 'Destinos para viajar en verano',
        texto: '¿Quieres escaparte este verano? Te contamos cuáles son los mejores destinos para disfrutar del sol y la playa.',
        autor: 'Juan Pérez',
        imagen: 'https://source.unsplash.com/iq6F5qkukfA',
        fecha: new Date('2022-06-15'),
        categoria: 'Viajes'
    },
    {
        titulo: 'Últimas tendencias en moda',
        texto: '¿Quieres estar a la última en moda? Aquí te contamos las últimas tendencias y cómo llevarlas.',
        autor: 'María Martínez',
        imagen: 'https://source.unsplash.com/z_gWc0RvJrM',
        fecha: new Date('2022-05-10'),
        categoria: 'Moda'
    },
    {
        titulo: 'El futuro de la inteligencia artificial',
        texto: 'La inteligencia artificial está revolucionando el mundo. ¿Quieres saber más sobre su futuro y sus aplicaciones?',
        autor: 'Carlos Ruiz',
        imagen: 'https://source.unsplash.com/H6cq5PboW5o',
        fecha: new Date('2022-04-20'),
        categoria: 'Tecnología'
    }
];
