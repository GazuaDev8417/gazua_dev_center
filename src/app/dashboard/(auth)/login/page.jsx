'use client'
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import styles from './page.module.css'
import Image from "next/image"
import { useRouter } from "next/navigation"
import Loading from "@/components/loading/Loading"


export default function Login(){
    const router = useRouter()
    const session = useSession()


    const handleSubmit = async(e)=>{
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value

        signIn('credentials', { email, password })       
    }

    if(session.status === 'loading'){
        return<Loading/>
    }

    if(session.status === 'authenticated'){
        router.push('/dashboard')
    }


    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
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