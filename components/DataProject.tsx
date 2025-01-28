import React from 'react';

import AppAcademia from '../public/assets/CELULARACADEMIA.png';
import Academia from '../public/assets/Academiacompleto.png';
import PortifoImage from '../public/assets/PORTICOMPL.png';
import Personal from '../public/assets/personaltela.png'
import { StaticImageData } from 'next/image';

export interface Project {
  id: string;
  image: StaticImageData;
  nome: string;
  link: string;
  descricao: string;
  ling: string;
}

export const data: Project[] = [

  {
    id: '1',
    image: Academia,
    nome: ' LANDING PAGE ACADEMIA',
    link: 'https://github.com/Ricardomms10/ProjetoAcademiaPrime',
    descricao: 'Criado para uma academia Fictícia, todas imagens geradas por IA e flayes feitos por mim por PhotoShop .',
    ling: 'Next.JS, Scss/Sass',
  },
  {
    id: '2',
    image: PortifoImage,
    nome: 'ESSA APLICAÇÃO',
    link: 'https://github.com/Ricardomms10/PortfolioNew',
    descricao: 'Meu portfólio',
    ling: 'React JS, Styled Components e Material IU',
  },
  {
    id: '3',
    image: Personal,
    nome: 'LANDING PAGE PERSONAL',
    link: 'https://github.com/Ricardomms10',
    descricao: 'Uma Landing Page para um Personal Fictício',
    ling: 'NextJs, Scss/Sass',
  },
  {
    id: '4',
    image: AppAcademia,
    nome: 'APP ACADEMIA',
    link: 'https://github.com/Ricardomms10/AppAcademia',
    descricao: 'App de academia para o aluno ter tudo na palma da mão.',
    ling: 'React Native',
  },
];


