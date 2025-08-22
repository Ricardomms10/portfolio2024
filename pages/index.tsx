import React, { useContext } from 'react';
import styles from '../styles/Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import Skill from '@/components/Skill';
import { ThemeContext, ThemeContextProps } from '../components/Layout';

const curriculo = '/assets/RicardoWeb.pdf';

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
          <h1>SOFTWARE</h1>
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
          Atuo na área de tecnologia, com sólida base em lógica de programação e gestão de bancos de dados. Atualmente, concentro meu trabalho em desenvolvimento e automações, criando soluções que otimizam processos e potencializam resultados.
          Explore meu portfólio e descubra como transformo desafios tecnológicos em soluções práticas e eficazes.
        </p>
      </div>
      <Skill />
    </div>
  );
};

export default Home;
