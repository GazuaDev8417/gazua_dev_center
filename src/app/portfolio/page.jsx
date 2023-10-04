import Link from 'next/link'
import styles from './page.module.css'

export default function Portfolio(){
    return(
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Escolha uma galeria</h1>
            <div className={styles.items}>
                <Link href='/portfolio/websites' className={styles.item}>
                    <span className={styles.title}>Websites</span>
                </Link>
                <Link href='/portfolio/api' className={styles.item}>
                    <span className={styles.title}>APIs</span>
                </Link>
                <Link href='/portfolio/applications' className={styles.item}>
                    <span className={styles.title}>Aplicativos</span>
                </Link>
            </div>
        </div>
    )
}