import React from 'react'
import title from '../Title/index.js'
import Button from '../Button/index.js'
import styles from './styles.module.css'
import img from '../../assets/aya.png'
import jsLogo from '../../assets/JavaScript.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import typeSciptIcon from '../../assets/typescript.png'
import cssIcon from '../../assets/social.png'
import CodeIcon from '@mui/icons-material/Code';
import CapaWms from '../../assets/Capa_Projeto_WMS.jpg'
import CssIcon from '../../assets/CSS3.svg'
import JavaIcon from '../../assets/Java.svg'
import ReactIcon from '../../assets/React.svg'
import HtmlIcon from '../../assets/Html.svg'
import NextIcon from '../../assets/NEXT.svg'
import TailWindCss from '../../assets/TailWindCss.svg'
import Promptopia from '../../assets/Promptopia.jpg'


import ProjectAgendaLogo from '../../assets/Projeto_Agenda_React.jpg'

export default function projects(){
    
    
    const projectLink1 ='https://leandro5610.github.io/Agenda_Estudos_Deploy/'
    return(

        <div className={styles.container}>
            <h1>PROJETOS</h1>
            <div className={styles.projects}>
                <div className={styles.content}>
                <img src={ProjectAgendaLogo} height={400} width={600}></img>
                </div>
                <div className={styles.projectText}>
                <h1>Agenda de Estudos</h1>
                    <p>
                    Este é um projeto desenvolvido no framework React, utilizando TypeScript.
                     Trata-se de uma aplicação que permite ao usuário organizar seu tempo de estudo.
                      Com a aplicação, é possível definir o que será estudado no dia e quanto tempo se 
                      pretende dedicar a cada atividade, auxiliando nos estudos para melhorar a concentração 
                      e o comprometimento. A ferramenta é semelhante à técnica Pomodoro, que ajuda a aumentar a 
                      produtividade e o foco durante os estudos.
                    </p>
                    <a href='https://github.com/Leandro5610/Agenda_Estudos_Deploy' target='blank' className={styles.buttonContainer}><Button Icon ={GitHubIcon} text={"GitHub"}/></a>
                    <a href='https://leandro5610.github.io/Agenda_Estudos_Deploy/' target='blank' className={styles.buttonContainer}><Button Icon={CodeIcon} text={"Deploy"}/></a>
                    <span className={styles.tecnologys}>
                            <img src={typeSciptIcon} height={50} width={50}/>
                            <img src={cssIcon} height={50} width={50}/>
                    </span>
                </div>
                
                        
            </div>
            <div className={styles.projects}>
                <div className={styles.content}>
                <img src={CapaWms} height={400} width={600}></img>
                </div>
                <div className={styles.projectText}>
                <h1>Sistema de gerenciamento de armazém (WMS)</h1>
                    <p>
                    Este foi um trabalho de conclusão de curso, com o intuito de 
                    auxiliar os alunos do curso de Logística a terem uma experiência
                     imersiva sobre as etapas do WMS. Nesse sistema, os alunos contam 
                     com um ambiente imersivo e didático, que faz parte da prática no 
                     curso de Logística. Algumas das funções oferecidas são Armazenagem 
                     de Produtos, Realização de Pedidos, entre outras. Este projeto foi 
                     desenvolvido por uma equipe de 7 integrantes.
                        <br></br>
                        Esse projeto foi feito em uma equipe de 7 intregantes:                        
                    </p>
                    <br></br>
                    <p className={styles.integrantes}>Desenvolvedores Front-End: 
                        <a href='https://github.com/AndreRodriSantos' target='blank'> André Rodrigues </a> 
                        e <a href='https://github.com/HoCH-DS' target='blank'>Caio Hoch</a>
                    </p>
                    <p className={styles.integrantes}>Desenvolvedores Mobile: 
                        <a href='https://github.com/diogocarp' target='blank'> Diogo Carpinelli </a> 
                        e <a href='https://github.com/RafaelCaroba' target='blank'>Rafael Caroba</a>
                    </p>
                    <p className={styles.integrantes}>Desenvolvedores Back-End: 
                        <a href='https://github.com/BrunoViniciuszk' target='blank'> Bruno Vinicius</a>, 
                        <a href='https://github.com/Leandro5610' target='blank'> Leandro Rocha </a> 
                        e <a href='https://github.com/passosrenan'target='blank'>Renan Passos</a>
                    </p>
                    <a href='https://github.com/Leandro5610/WMS'target='_blank' className={styles.buttonContainer}><Button   Icon ={GitHubIcon} text={"GitHub"}/></a>
                    <a href='https://project-wms.vercel.app/'  target='_blank' className={styles.buttonContainer}><Button Icon={CodeIcon} text={"Deploy"}/></a>
                    <span className={styles.tecnologys}>
                            <img src={JavaIcon} height={50} width={50}/>
                            <img src={jsLogo} height={50} width={50}/>
                            <img src={ReactIcon} height={50} width={50}/>
                            <img src={HtmlIcon} height={50} width={50}/>
                            <img src={CssIcon} height={50} width={50}/>
                            
                    </span>
                </div>
                
                        
            </div><div className={styles.projects}>
                <div className={styles.content}>
                <img src={Promptopia} height={400} width={600}></img>
                </div>
                <div className={styles.projectText}>
                <h1>Promptopia</h1>
                    <p>
                        Este projeto é uma ferramenta de código aberto para o mundo descobrir, criar e compartilhar prompts criativos.
                        No decorrer do dia a dia, as pessoas estão utilizando cada vez mais o ChatGPT. Dessa forma, o 
                        Promptopia serve como uma lista de todos os prompts que você pode usar imediatamente durante seu uso do ChatGPT.               
                    </p>
                   
                    <a href='https://github.com/Leandro5610/promptopia_1.0'target='_blank' className={styles.buttonContainer}><Button   Icon ={GitHubIcon} text={"GitHub"}/></a>
                    <a href='https://promptopia-1-0-avb1xs70y-leandro-rocha-vianas-projects.vercel.app/'  target='_blank' className={styles.buttonContainer}><Button Icon={CodeIcon} text={"Deploy"}/></a>
                    <span className={styles.tecnologys}>
                        <img src={NextIcon} height={50} width={50}/>
                        <img src={TailWindCss} height={50} width={50}/>
                        <img src={ReactIcon} height={50} width={50}/>
                        <img src={jsLogo} height={50} width={50}/>
                    </span>
                </div>
                
                        
            </div>
            
          
        </div>
        /*<div className={styles.container} >
            <h1 className={styles.title}>PROJETOS</h1>
            <section className={styles.projects}>
                <div className={styles.projecContent}>
                    <img src={img} height={400} width={600}></img>
                </div>
                <div className={styles.projectText}>
                    <h1>Nome do projeto</h1>
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    
                    <div className={styles.buttos}>
                        <div><Button/></div>
                        <div><Button/></div>
                        <div className={styles.features}>
                            <span>
                            <img src={jsLogo} height={50} width={50}/>
                            <img src={jsLogo} height={50} width={50}/>
                            <img src={jsLogo} height={50} width={50}/>
                            </span>
                        </div>
                    </div>
                   
                    
                    
                </div>
                

            </section>

        </div>*/
    )
}