import React from 'react'
import title from '../Title/index.js'
import Button from '../Button/index.js'
import styles from './styles.module.css'
import img from '../../assets/aya.png'
import jsLogo from '../../assets/JavaScript.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
export default function projects(){
    
    return(

        <div className={styles.container}>
            <h1>PROJETOS</h1>
            <div className={styles.projects}>
                <div className={styles.content}>
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
                    <a href='#' className={styles.buttonContainer}><Button Icon ={GitHubIcon} text={"GitHub"}/></a>
                    <a href='#' className={styles.buttonContainer}><Button Icon={CodeIcon} text={"Deploy"}/></a>
                    <span className={styles.tecnologys}>
                            <img src={jsLogo} height={50} width={50}/>
                            <img src={jsLogo} height={50} width={50}/>
                            <img src={jsLogo} height={50} width={50}/>
                    </span>
                </div>
                
                        
            </div>
            <div className={styles.projects}>
                <div className={styles.content}>
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
                    <a href='#' className={styles.buttonContainer}><Button   Icon ={GitHubIcon} text={"GitHub"}/></a>
                    <a href='#' className={styles.buttonContainer}><Button Icon={CodeIcon} text={"Deploy"}/></a>
                    <span className={styles.tecnologys}>
                            <img src={jsLogo} height={50} width={50}/>
                            <img src={jsLogo} height={50} width={50}/>
                            <img src={jsLogo} height={50} width={50}/>
                    </span>
                </div>
                
                        
            </div>
            <div className={styles.projects}>
                <div className={styles.content}>
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
                    <a href='#' className={styles.buttonContainer}><Button  Icon ={GitHubIcon} text={"GitHub"}/></a>
                    <a href='#' className={styles.buttonContainer}><Button Icon={CodeIcon} text={"Deploy"}/></a>
                    <span className={styles.tecnologys}>
                            <img src={jsLogo} height={50} width={50}/>
                            <img src={jsLogo} height={50} width={50}/>
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