import React, { useContext } from 'react';
import { Footer } from './Footer'; 
import { ThemeContext } from './Layout';

interface ThemedFooterProps { }

const ThemedFooter: React.FC<ThemedFooterProps> = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

     return <Footer {...{ theme, toggleTheme }} />;;
};

export default ThemedFooter;
