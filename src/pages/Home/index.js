import React from 'react';
import styles from './styles.module.css'
import { useState } from 'react';
import {lightTheme, darkTheme} from '../../themes/theme'
import NavBar from '../../components/NavBar/index';
import {ThemeProvider} from 'styled-components';


export default function Home(){
    
    
    return(
        
       <div>
            <NavBar/>        
       </div>
    )
}