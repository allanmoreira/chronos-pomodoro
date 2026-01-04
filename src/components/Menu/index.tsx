import styles from './styles.module.css'
import {HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from "lucide-react";

export function Menu() {
    const descricaoHome = "Ir para a home";
    const descricaoHistorico = "Ver histórico";
    const descricaoConfig = "Configurações";
    const descricaoTema = "Alterar tema";
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
            <a href="#" className={styles.menuLink}>
               className={styles.menuLink}
               aria-label={descricaoTema}
               title={descricaoTema}
                <SunIcon/>
            </a>
        </nav>)
}