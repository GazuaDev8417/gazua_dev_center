'use client'
import { useContext } from 'react'
import styles from './darkMode.toggle.module.css'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'
import { ThemeContext } from '@/context/ThemeContext'


export default function DarkModeToggle(){
    const { toggle, mode } = useContext(ThemeContext)

    return(
        <div className={styles.container} onClick={toggle}>
            <BsSunFill className={styles.icon}/>
            <BsFillMoonFill className={styles.icon}/>
            <div 
                className={styles.ball}
                style={mode === 'light' ? {right:'2px'} : {left:'2px'}}/>
        </div>
    )
}