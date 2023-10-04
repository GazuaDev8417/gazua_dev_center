'use client'
import { signIn } from "next-auth/react"
import Link from "next/link"
import styles from './page.module.css'
import Image from "next/image"


export default function Login(){
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <input 
                    type="email" 
                    placeholder='E-mail' 
                    className={styles.input}
                    required/>
                <input 
                    type="password" 
                    placeholder='Sua senha' 
                    className={styles.input}
                    required/>
                <div className={styles.btnContainer}>
                    <input type="reset" value="Limpar" className={styles.btn}/>
                    <button className={styles.btn}>Entrar</button>
                </div>
            </form>
            <div onClick={()=> signIn('google')} className={styles.imgContainer}>
                <Image 
                    src='/google_icon.png'
                    width={20}
                    height={20}
                    alt="google icon"/>
                Entrar com o Google
            </div>
            <p>Ainda não tem conta?&nbsp;
            <Link href='/dashboard/register'>Registre-se</Link></p>            
        </div>
    )
}