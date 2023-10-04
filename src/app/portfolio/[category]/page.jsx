import Image from 'next/image'
import styles from './page.module.css'
import { items } from './data'
import { notFound } from 'next/navigation'



const getData = (cat)=>{
    const data = items[cat]

    if(data){
        return data
    }

    return notFound
}


export async function generateMetadata({ params }){
    return{
        title: params.category,
        description: 'Projetos do portfólio, websites, APIs e aplicações mobile'
    }
}



export default function Category({ params }){
    const data = getData(params.category)
    
    return(
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            {data.map(item=>(
                <div className={styles.item} key={item.id}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <a href={item.url} target='_blank' className={styles.btn}>
                            Visite
                        </a>                    
                    </div>
                    <div className={styles.imgContainer}>
                        <Image 
                            fill={true}
                            className={styles.img}
                            src={item.image}
                            alt={item.alt}/>
                    </div>
                </div>            

            ))}
        </div>
    )
}