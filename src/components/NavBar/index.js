import React from "react";
import logo from "../../assets/Magento.svg";
import styles from './styles.module.css'


export default function NavBar(){
    return(
        <div className={styles.container}>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" width={100} height={90}></img>
                </div>
            <ul className={styles.options}>
                <li>HOME</li>
                <li>SOBRE MIM</li>
                <li>SKILLS</li>
                <li>PROJETOS</li>
                <li>CONTATO</li>
            </ul>
        </nav>
        </div>

    );
}