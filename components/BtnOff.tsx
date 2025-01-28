import React, { useContext } from "react";
import { ThemeContext } from "./Layout";
import style from "../styles/BtnOff.module.scss"

const BtnOff: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return null;
    }

    const { toggleTheme } = themeContext;

    return (
        <>
            <input type="checkbox" id="theme-switcher" className={style.themeSwitcher}  onChange={toggleTheme} />
            <div className={style.appContainer}>
                <div className={style.themeSwitcherArea}>
                    <label htmlFor="theme-switcher" className={style.themeSwitcherButton}></label>
                </div>
            </div>
        </>
    );
};

export default BtnOff;
