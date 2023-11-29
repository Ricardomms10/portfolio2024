import React, { ReactNode, createContext, useState } from 'react';
import { NavBar } from './NavBar';
import {Footer} from './Footer';  // Remova as chaves {}

interface Theme {
    id: string;
    backgroundColor: string;
    color: string;
}

export const themes: { [key: string]: Theme } = {
    light: {
        id: 'light',
        backgroundColor: '#FFF',
        color: '#000',
    },
    dark: {
        id: 'dark',
        backgroundColor: '#000',
        color: '#FFF',
    },
};

export interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: themes.light, toggleTheme: () => { } });

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme((curr) => (curr === themes.light ? themes.dark : themes.light));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            
            <NavBar />
            <style jsx global>{`
        body {
          background-color: ${theme?.backgroundColor};
          color: ${theme?.color};
        }
      `}</style>

            <main className="main-container">{children}</main>

            <Footer />
        </ThemeContext.Provider>
    );
}
