import Link from "next/link";
import { useState } from "react";
import style from "../styles/NavBar.module.scss";
import BtnOff from "./BtnOff";

interface NavBarProps {
    customStyle?: React.CSSProperties;
}

const NavBar: React.FC<NavBarProps> = ({ customStyle }) => {
    
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={style.headContainer} style={customStyle}>
            <ul className={style.menuContainer}>
                <Link href="/">
                    <li className={style.textMenu} >HOME</li>
                </Link>
                <Link href="/Projeto">
                    <li className={style.textMenu} >PROJETOS</li>
                </Link>
                <li>
                    <BtnOff />
                </li>
            </ul>

            <div className={style.hamburgerIcon} onClick={toggleMenu} style={customStyle}>
                <i className="fas fa-bars"></i>
            </div>

            {isMenuOpen && (
                <div className={style.overlayMenu} >
                    <Link href="/">
                        <p className={style.menuLink}><p>HOME</p></p>
                    </Link>
                    <Link href="/Projeto">
                        <p className={style.menuLink}><p>PROJETOS</p></p>
                    </Link>
                    <BtnOff />
                </div>
            )}
        </header>
    );
};

export { NavBar };
