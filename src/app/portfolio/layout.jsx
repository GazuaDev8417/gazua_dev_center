import styles from './page.module.css'


export const metadata = {
    title: 'Portfólio',
    description: 'Nosso trabalho! Um acervo com nossos websites, APIs e aplicativos',
}

export default function Layout({ children }){
    return(
        <div>
            <h1 className={styles.mainTitle}>Nosso trabalho</h1>
            { children }
        </div>
    )
}