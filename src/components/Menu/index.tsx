import styles from './styles.module.css'
import {HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon} from "lucide-react";
import {useEffect, useState} from "react";

type Themes = 'dark' | 'light';

export function Menu() {
    const descricaoHome = "Ir para a home";
    const descricaoHistorico = "Ver histórico";
    const descricaoConfig = "Configurações";
    const descricaoTema = "Alterar tema";

    const [theme, setTheme] = useState<Themes>(() => {
        return localStorage.getItem('theme') as Themes || 'dark';
    });


    const nextThemeIcon = {
        'dark': <SunIcon/>,
        'light': <MoonIcon/>
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setTheme(prevTheme => {
            return prevTheme === 'dark' ? 'light' : 'dark'
        });

    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a href="#"
               className={styles.menuLink}
               aria-label={descricaoHome}
               title={descricaoHome}>
                <HouseIcon/>
            </a>
            <a href="#"
               className={styles.menuLink}
               aria-label={descricaoHistorico}
               title={descricaoHistorico}>
                <HistoryIcon/>
            </a>
            <a href="#"
               className={styles.menuLink}
               aria-label={descricaoConfig}
               title={descricaoConfig}>
                <SettingsIcon/>
            </a>
            <a href="#"
               className={styles.menuLink}
               aria-label={descricaoTema}
               title={descricaoTema}
               onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </nav>)
}