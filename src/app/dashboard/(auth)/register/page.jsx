'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'



export default function Register(){
    const router = useRouter()
    const session = useSession()
    

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

       try{
            const res = await fetch('/api/auth/register', {
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            })

            if(res.status === 403){
                alert('Usuário já cadastrado')
            }else if(res.status !== 201 && res.status !== 200){
                alert(`Erro ao cadastrar usuário: ${res.status}`)
            }

            res.status === 201 && router.push('/dashboard/login')
        }catch(error){
            alert(error)
        }
    }


    if(session.status === 'authenticated'){
        router.push('/dashboard')
    }
    


    return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    required 
                    type="text" 
                    placeholder='Nome' 
                    className={styles.input}/>
                <input 
                    required 
                    type="email" 
                    placeholder='E-mail' 
                    className={styles.input}/>
                <input 
                    required 
                    type="password" 
                    placeholder='Sua senha' 
                    className={styles.input}/>
                <div className={styles.btnContainer}>
                    <input 
                        type="reset"
                        value="Limpar"
                        className={styles.btn}/>
                    <button className={styles.btn}>Registrar</button>
                </div>
            </form>
            <Link href='/dashboard/login'>Logar com uma conta existente</Link>
        </div>
    )
}