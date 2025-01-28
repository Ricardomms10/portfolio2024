import React, { useState, useContext } from 'react';
import style from '../styles/Footer.module.scss';
import { ThemeContext } from './Layout';

interface FooterProps { }

export const Footer: React.FC<FooterProps> = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [copiado, setCopiado] = useState(false);
    const email = 'RICARDOMMS10@GMAIL.COM';

    const copiarEmail = () => {
        navigator.clipboard.writeText(email);
        setCopiado(true);
        setTimeout(() => {
            setCopiado(false);
        }, 1000);
    };

    const footerStyle = {
        backgroundColor: theme.id === 'dark' ? '#1e2021' : '#e7e5e5',
        color: theme.id === 'dark' ? '#FFF' : '#000',
    };

    return (
        <footer className={style.container} style={footerStyle}>
            <div className={style.box}>
                <h1>
                    <i className="fa-solid fa-envelope-open-text"></i>
                </h1>
                <h2>ME MANDE UM EMAIL</h2>
            </div>

            <div className={style.box2} data-copiado={copiado}>
                <h3>{email}</h3>
                <button onClick={copiarEmail}>
                    <h2 className="clickable-element">
                        {copiado ? 'EMAIL COPIADO!' : 'COPIAR EMAIL'}
                    </h2>
                </button>
            </div>
        </footer>
    );
}

