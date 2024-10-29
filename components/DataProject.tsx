import React from 'react';

import Jokenpo from '../public/assets/JOKEPO.png';
import AppAcademia from '../public/assets/CELULARACADEMIA.png';
import Academia from '../public/assets/Academiacompleto.png';
import TempoImage from '../public/assets/TEMPCOM.png';
import EstacionamentoImage from '../public/assets/estacionamentoCTP.png';
import PortifoImage from '../public/assets/PORTICOMPL.png';
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
    id: '2',
    image: Academia,
    nome: ' LANDING PAGE ACADEMIA',
    link: 'https://github.com/Ricardomms10/ProjetoAcademiaPrime',
    descricao: 'Criado para uma academia Fictícia, todas imagens geradas por IA e flayes feitos por mim por PhotoShop .',
    ling: 'Next.JS, Scss/Sass',
  },
  {
    id: '3',
    image: TempoImage,
    nome: 'CLIMA TEMPO API',
    link: 'https://github.com/Ricardomms10/ClimaTempo',
    descricao: 'Consome uma API Climática',
    ling: 'React.JS, Styled Components',
  },
  {
    id: '4',
    image: EstacionamentoImage,
    nome: 'ESTACIONAMENTO BATE-BATE',
    link: 'https://github.com/Ricardomms10/EstacionamentoBate',
    descricao: 'Sistema Online de entrada e saída de veículos.',
    ling: 'React JS, Vite.JS, Styled Components e TypeScript',
  },
  {
    id: '5',
    image: Jokenpo,
    nome: 'JOKENPÔ',
    link: 'https://github.com/Ricardomms10/JOKENPO',
    descricao: 'Um jogo divertido de pedra, papel e tesoura.',
    ling: 'Next.js, TypeScript e Sass/Scss',
  },
  {
    id: '6',
    image: PortifoImage,
    nome: 'Essa Aplicação',
    link: 'https://github.com/Ricardomms10/PortfolioNew',
    descricao: 'Meu portfólio',
    ling: 'React JS, Styled Components e Material IU',
  },
  {
    id: '1',
    image: AppAcademia,
    nome: 'APP ACADEMIA',
    link: 'https://github.com/Ricardomms10/AppAcademia',
    descricao: 'App de academia para o aluno ter tudo na palma da mão.',
    ling: 'React Native',
  },
];


