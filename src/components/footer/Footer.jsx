import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(
        <div className={styles.container}>
            <div>
                @2023 Gazua Dev Center. Todos os direitos reservados
            </div>
            <div className={styles.social}>
                <Link href='https://www.facebook.com/flamarion.francadasilva/' target='_blank'>
                    <Image src='/1.png' width={15} height={15} className={styles.icon} alt='Lama Dev facebook'/>
                </Link>
                <Link href='https://www.instagram.com/gazua.keymaster/' target='_blank'>
                    <Image src='/2.png' width={15} height={15} className={styles.icon} alt='Lama Dev instagram'/>
                </Link>
                <Link href='https://twitter.com/cedagio57022' target='_blank'>
                    <Image src='/3.png' width={15} height={15} className={styles.icon} alt='Lama Dev twitter'/>
                </Link>
                <Link href='https://www.youtube.com/channel/UCgx8akzUMFuVh6FFnWPArQQ' target='_blank'>
                    <Image src='/4.png' width={15} height={15} className={styles.icon} alt='Lama Dev youtube'/>
                </Link>
            </div>
        </div>
    )
}