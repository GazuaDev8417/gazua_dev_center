import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export const metadata = {
    title: 'Sobre',
    description: 'Um pouco sobre nós. Quem somos, o que fazemose e como nos empenhamos para melhor atendê-los',
  }


export default function About(){
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='https://media.istockphoto.com/id/1206830278/pt/foto/close-up-photo-of-smiling-joyful-cheerful-girl-working-as-the-head-of-software-develpment.jpg?b=1&s=612x612&w=0&k=20&c=6EsXziQSBdnHg3BKjHK7ARKyhCp76OJ2KXehzeEcykk='
                    fill={true} alt='Web dev image'
                    className={styles.img}/>
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Desenvolvedores qualificados</h1>
                    <h2 className={styles.imgDesc}>Profissionais empenhados em encontrar as mais criativas soluções</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Quem somos?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Voluptatibus, esse ipsam hic suscipit facilis officia a 
                        pariatur! Officia debitis illum tenetur ullam minima ipsam 
                        tempora expedita esse. Quae, distinctio minus!
                        <br/><br/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Reprehenderit officiis, eos animi iure quasi facere, 
                        officia culpa perferendis explicabo molestias perspiciatis? 
                        Corrupti odio assumenda temporibus quia, ut sit ratione 
                        quisquam.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>O que fazemos?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus id hic accusantium atque consectetur explicabo ducimus
                        tempora neque ut rem? Quae autem eligendi, expedita dolorum 
                        tempora cupiditate sit doloremque maxime.
                        <br/>
                        <br/> - Websites dinâmicos
                        <br/>
                        <br/> - Aplicações mobile que atendam suas demandas
                        <br/>
                        <br/> - Aplicações fullstack para melhor organização de seus dados e clientes
                    </p>
                    <Link href='/contact' 
                        className={styles.btn}>
                            Contato
                    </Link>
                </div>
            </div>
        </div>
    )
}