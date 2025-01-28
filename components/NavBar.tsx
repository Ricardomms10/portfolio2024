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
    const hamburgerRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={style.headContainer} style={customStyle}>
            <ul className={style.menuContainer}>
                <Link href="/" passHref>
                    <li className={style.textMenu} onClick={handleLinkClick}>
                        HOME
                    </li>
                </Link>
                <Link href="/Projeto" passHref>
                    <li className={style.textMenu} onClick={handleLinkClick}>
                        PROJETOS
                    </li>
                </Link>
                <li>
                    <BtnOff />
                </li>
            </ul>

            <div
                className={style.hamburgerIcon}
                onClick={toggleMenu}
                style={customStyle}
                ref={hamburgerRef}
            >
                <i className="fas fa-bars"></i>
            </div>

            {isMenuOpen && (
                <div
                    className={style.overlayMenu}
                    ref={menuRef}
                >
                    <Link href="/" passHref>
                        <p className={style.menuLink} onClick={handleLinkClick}>
                            HOME
                        </p>
                    </Link>
                    <Link href="/Projeto" passHref>
                        <p className={style.menuLink} onClick={handleLinkClick}>
                            PROJETOS
                        </p>
                    </Link>
                    <BtnOff />
                </div>
            )}
        </header>
    );
};

export { NavBar };
