import React, { useContext } from 'react';
import styles from '../styles/Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import Skill from '@/components/Skill';
import { ThemeContext, ThemeContextProps } from '../components/Layout';

const curriculo = '/assets/C. Ricardo Malta.pdf';

interface HomeProps {
  customStyle?: React.CSSProperties;
}

const Home: React.FC<HomeProps> = ({ customStyle }) => {
  const { theme } = useContext<ThemeContextProps>(ThemeContext);

  return (
    <div className={styles.home} style={{ ...customStyle, backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className={styles.box}>
        <span> OI, EU SOU RICARDO MALTA</span>
        <div className={styles.divisao}>
          <h1>WEB</h1>
          <div className={styles.react1}>
            <a
              href="https://www.linkedin.com/in/ricardo-malta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={curriculo} download title="Baixar Currículo">
              <FontAwesomeIcon icon={faNewspaper} />
            </a>
            <a
              href="https://github.com/Ricardomms10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <h1>DEVELOPER</h1>
        <p>
          Sou desenvolvedor web e estudante de Análise e Desenvolvimento de Sistemas (EAD), 
          além de me aprofundar na segurança 
          cibernética para agregar proteção aos meus projetos e trabalhos. 
          Explore meu portfólio e conheça como posso transformar desafios tecnológicos em soluções inovadoras e seguras.
        </p>
      </div>
      <Skill />
    </div>
  );
};

export default Home;
