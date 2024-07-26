import React from "react";
import logo from "../../assets/Magento.svg";
import styles from './styles.module.css'


export default function NavBar(){
    return(
        <div className={styles.container}> 
           
                <div className={styles.navbar}>
                <a>SOBRE MIM</a>
                <a>PROJETOS</a>
                <a>SKILLS</a>
                <a>REDES SOCIAIS</a>
                </div>
        </div>

    );
}