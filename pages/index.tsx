import React, { useContext } from 'react';
import styles from '../styles/Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import Skill from '@/components/Skill';
import { ThemeContext, ThemeContextProps } from '../components/Layout';

const curriculo = '/assets/curriculo2024.pdf';

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
              href="https://www.linkedin.com/in/ricardo-malta-632b70164/"
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
          Desenvolvedor Full-Stack apaixonado por transformar <br />
          ideias em realidade através <br />
          de código e design inovadores.<br /> Convido você a explorar meu
          portfólio e descobrir <br />como posso trazer soluções criativas
          para seus desafios tecnológicos.
        </p>
      </div>
      <Skill />
    </div>
  );
};

export default Home;
