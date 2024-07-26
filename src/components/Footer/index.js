import React from "react";
import styles from "./styles.module.css"
import jsLogo from '../../assets/JavaScript.svg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub'
export default function Footer(){
    const linkedinLink = 'https://www.linkedin.com/in/leandro-viana56/'
    const whatsappLink= 'https://bit.ly/3WBJeLg'
    const emailLink = 'mailto:leandrorviana56@gmail.com'
    const gitLink = 'https://github.com/Leandro5610'
    return(
       <div className={styles.container}>
            <div className={styles.socials}>
                <a href={whatsappLink}className={styles.circle} target="blank"><WhatsAppIcon fontSize="large"/></a>
                <a href={linkedinLink}className={styles.circle} target="blank"><LinkedInIcon fontSize="large"/></a>
                <a href={emailLink}className={styles.circle} target="blank"><EmailIcon fontSize="large"/></a>
                <a href={gitLink}className={styles.circle} target="blank"><GitHubIcon fontSize="large"/></a>
            </div>
            
            <p className={styles.copyRight}>Copyright @2024 Leandro</p>
       </div>
    )
}