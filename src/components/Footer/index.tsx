import styles from './styles.module.css'
import {HeartIcon} from "lucide-react";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a href=''>Entenda como funciona a ténica pomodoro</a>
            <a href=''>Chronos pomodoro &copy; {new Date().getFullYear()} - Feito com <HeartIcon/></a>
        </footer>
    )
}