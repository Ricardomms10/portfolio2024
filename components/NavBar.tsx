import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import style from "../styles/NavBar.module.scss";
import BtnOff from "./BtnOff";

interface NavBarProps {
    customStyle?: React.CSSProperties;
}

const NavBar: React.FC<NavBarProps> = ({ customStyle }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Fecha o menu quando clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className={style.headContainer} style={customStyle}>
            <ul className={style.menuContainer}>
                <Link href="/" onClick={closeMenu}>
                    <li className={style.textMenu}>HOME</li>
                </Link>
                <Link href="/Choice" onClick={closeMenu}>
                    <li className={style.textMenu}>PROJETOS</li>
                </Link>
                <li>
                    <BtnOff />
                </li>
            </ul>

            <div className={style.hamburgerIcon} onClick={toggleMenu} style={customStyle}>
                <i className="fas fa-bars"></i>
            </div>

            {isMenuOpen && (
                <div className={style.overlayMenu} ref={menuRef}>
                    <Link href="/" onClick={closeMenu}>
                        <p className={style.menuLink}>HOME</p>
                    </Link>
                    <Link href="/Choice" onClick={closeMenu}>
                        <p className={style.menuLink}>PROJETOS</p>
                    </Link>
                    <BtnOff />
                </div>
            )}
        </header>
    );
};

export { NavBar };
