import React from 'react'
import styles from './styles.module.css'
import { useState } from 'react';
import { lightTheme, darkTheme } from '../../themes/theme'
import NavBar from '../../components/NavBar/index';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/Button';
import GitHub from '../../assets/GitHub.svg'
import Instagram from '../../assets/Instagram.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Title from '../../components/Title';
import Wave from 'react-wavify';
import CardSkill from '../../components/Cards';
import Projects from '../../components/projects'
import Footer from '../../components/Footer';
import logo from "../../assets/Magento.svg";
export default function Test() {
    const urlLinkedin = "https://www.linkedin.com/in/leandro-viana56/"
    const urlInstagram = "https://www.instagram.com/leandro._eu/"
    const urlGitHub = "https://github.com/Leandro5610"

    let sectios = document.querySelectorAll('section')
    let navLinks = document.querySelectorAll('header nav a')

    window.onscroll = () => {
        sectios.forEach(sec => {
            let top = window.scrollY
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight
            let id = sec.getAttribute('id')

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    document.querySelector('header nav a [href*=' + id + ']')
                })
            }
        })
    }
    return (
        <div className={styles.container}>
            <header>
                <img src={logo} alt="Logo" width={90} height={90}></img>
                <nav className={styles.nav}>
                    <a href='#home' className={styles.activate}>HOME</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#skills'>SKILLS</a>
                    <a href='#projetos'>PROJETOS</a>
                </nav>
            </header>

            <section id="home" className={styles.pages}>
                <div className={styles.dev}>
                    <h1>Olá,</h1>
                    <h1>Eu sou o <span></span></h1>
                    <h2>Desenvolvedor Full-Stack</h2>
                    <a href={urlGitHub} target='_blank'><img src={GitHub} width={80} height={80} className={styles.socialLink} /></a>
                    <a href={urlInstagram} target='_blank'><img src={Instagram} width={80} height={80} className={styles.socialLink}/></a>
                    <a href={urlLinkedin} target='_blank'><img src={Linkedin} width={80} height={80} className={styles.socialLink}/></a>
                </div>
                <div className={styles.photo}></div>
            </section>
            <section id="sobre" className={styles.pages}>
                <div className={styles.aboutMe}>
                    <h1>SOBRE</h1>
                    <p>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </section>
            <section id="skills" className={styles.pages}>
                <CardSkill/>
            </section>
            <section id="projetos" className={styles.pages}>
                <Projects/>
            </section>
            <section id="footer" className={styles.footer}>
                <Footer/>
            </section>
        </div>




    )
}