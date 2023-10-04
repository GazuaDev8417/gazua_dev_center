import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Link from 'next/link'


export const metadata = {
  title: 'Home',
  description: 'Chave mestra soluções. Aplicações web e mobile para atender suas demandas',
}

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Aplicações que suprem sua necessidade.</h1>
        <p className={styles.description}>
          Transformando sua ideia em realidade, implementamos aplicações
          para suas demandas e/ou da sua empresa.
        </p>
        <Link href='/portfolio' className={styles.btn}>Veja nosso trabalho</Link>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='Hero' className={styles.img}/>
      </div>
    </div>
  )
}
