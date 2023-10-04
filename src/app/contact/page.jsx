'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'





export default function Contact(){
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })


    const onChange = (e)=>{
        const { name, value } = e.target
        setForm({...form, [name]:value})
    }

    
    const clearForm = ()=>{
        setForm({
            name:'',
            email:'',
            message:''
        })
    }


    const sendMessage = (e)=>{
        e.preventDefault()

        const body = {
            name: form.name,
            email: form.email,
            message: form.message
        }

        fetch('http://localhost:3000/api/sendMessage', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data=>{
            console.log(data)
        }).catch(e=>{
            alert(e.message)
        })
    }


    return(
        <>
        <head>
            <meta name='description' content='Página para contato'/>
            <title>Contato</title>
        </head>
        <div className={styles.container}>
            <h1 className={styles.title}>Mantenha-nos em contato</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src='/contact.png'
                        alt='Imagem de contato'
                        fill={true}
                        className={styles.image}/>
                </div>
                <form onSubmit={sendMessage} className={styles.form}>
                    <input
                        name='name'
                        value={form.name} 
                        onChange={onChange}
                        type="text"
                        placeholder='Seu nome'
                        className={styles.input}/>
                    <input
                        name='email'
                        value={form.email} 
                        onChange={onChange}
                        type="email"
                        placeholder='E-mail'
                        className={styles.input}/>
                    <textarea 
                        name='message'
                        value={form.message}
                        onChange={onChange}
                        className={styles.textArea}
                        placeholder='Mensagem'
                        cols="30" rows="10"></textarea>
                    <div className={styles.btnContainer}>
                        <input
                            onClick={clearForm} 
                            type="button"
                            value="Limpar"
                            className={styles.btn}/>
                        <button className={styles.btn}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}