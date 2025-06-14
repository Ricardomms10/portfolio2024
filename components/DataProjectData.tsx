import { StaticImageData } from 'next/image';
import DataImagem from '../public/assets/densenvolvimento.png'

export interface DataProject {
    id: number;
    nome: string;
    descricao: string;
    ling: string;
    imagem: StaticImageData
}

export const data: DataProject[] = [
    {
        id: 1,
        nome: 'Em Desenvolvimento',
        descricao: 'Em Desenvolvimento',
        ling: '.',
        imagem: DataImagem
    },

];
