import styles from './styles.module.css'
import {HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from "lucide-react";
import {useEffect, useState} from "react";

type Themes = 'dark' | 'light';

export function Menu() {
    const descricaoHome = "Ir para a home";
    const descricaoHistorico = "Ver histórico";
    const descricaoConfig = "Configurações";
    const descricaoTema = "Alterar tema";

    const [theme, setTheme] = useState<Themes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setTheme(prevTheme => {
            return prevTheme === 'dark' ? 'light' : 'dark'
        });

    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    });

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
                <SunIcon/>
            </a>
        </nav>)
}