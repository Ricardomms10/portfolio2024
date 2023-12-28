import React from 'react';

import Jokenpo from '../public/assets/JOKEPO.png';
import CiliosImage from '../public/assets/CILIOSCOMPLETO.png';
import SenaImage from '../public/assets/MEGACOMP.png';
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
    id: '1',
    image: CiliosImage,
    nome: 'AGENDAMENTOS',
    link: 'https://github.com/Ricardomms10/ProjetoCilios02',
    descricao: 'Agendamentos para clientes.',
    ling: 'React JS',
  },
  {
    id: '2',
    image: EstacionamentoImage,
    nome: 'ESTACIONAMENTO BATE-BATE',
    link: 'https://github.com/Ricardomms10/EstacionamentoBate',
    descricao: 'Sistema Online de entrada e saída de veículos.',
    ling: 'React JS, Vite.JS, Styled Components e TypeScript',
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
    image: SenaImage,
    nome: 'NÚMEROS DA SENA',
    link: 'https://github.com/Ricardomms10/ProjetoNumerosLoteria',
    descricao: 'Gerador de números da sorte.',
    ling: 'React JS, Material IU',
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
];

// Agora você pode usar o array de projetos (data) em seus componentes React.
