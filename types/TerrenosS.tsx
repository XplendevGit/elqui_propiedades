import { PortableTextBlock } from "sanity";

export type TerrenosS = {
    _id: string;
    _createdAt: Date;
    imagen_1: string;
    imagen_2: string;
    imagen_3: string;
    imagen_4: string;
    imagen_5: string;
    imagen_6: string;
    nombre: string; 
    slug: string,
    valor: string;
    ubicacion: string;
    ubicacionEnlace: string;
    metrosCuadrados: string;
    descripcion: string;
    detalle: PortableTextBlock[];
}