import React from 'react'
import javaLogo from '../../assets/Java.svg'
import cssLogo from '../../assets/CSS3.svg'
import jsLogo from '../../assets/JavaScript.svg'
import reactLogo from '../../assets/React.svg'
import htmlLogo from '../../assets/Html.svg'
import nodeLogo from '../../assets/Nodejs.svg'
import styles from './styles.module.css'
import Title from '../Title'

function CardSkill() {
    return ( 
        
        <div className={styles.container}>
        <h1 className={styles.title}>SKILLS</h1>
        <div className={styles.cardsWrapper}>
          <div className={styles.card} datatype="java">
            <img src={javaLogo} height={100} width={100} alt="Java Logo"/>
          </div>
          <div className={styles.card} datatype='js'>
            <img src={jsLogo} height={100} width={100} alt="JavaScript Logo"/>
          </div>
          <div className={styles.card} datatype='css'>
            <img src={cssLogo} height={100} width={100} alt="CSS Logo"/>
          </div>
          <div className={styles.card} datatype='react'>
            <img src={reactLogo} height={100} width={100} alt="React Logo"/>
          </div>
          <div className={styles.card} datatype='html'>
            <img src={htmlLogo} height={100} width={100} alt="HTML Logo"/>
          </div>
          <div className={styles.card} datatype='node'>
            <img src={nodeLogo} height={100} width={100} alt="Node.js Logo"/>
          </div>
        </div>
      </div>
      
        /*<div className={styles.container}>
            <h1 className={styles.title}>SKILLS</h1>
            <section className={styles.skills}>
                <div className={styles.card}>
                    <img src={javaLogo} height={130} width={130} alt="Java Logo"/>
                </div>
                <div className={styles.card}>
                    <img src={jsLogo} height={130} width={130} alt="JavaScript Logo"/>
                </div>
                <div className={styles.card}>
                    <img src={cssLogo} height={130} width={130} alt="CSS Logo"/>
                </div>
                <div className={styles.card}>
                    <img src={reactLogo} height={130} width={130} alt="React Logo"/>
                </div>
                <div className={styles.card}>
                    <img src={htmlLogo} height={130} width={130} alt="HTML Logo"/>
                </div>
                <div className={styles.card}>
                    <img src={nodeLogo} height={130} width={130} alt="Node.js Logo"/>
                </div>
            </section>
        </div>*/
    );
}

export default CardSkill;


