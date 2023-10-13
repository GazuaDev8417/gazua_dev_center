import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'



export const metadata = {
    title: 'Blog',
    description: 'Posts do meu blog em https://123pense.blogspot.com/',
  }


const getData = async()=>{
    const res = await fetch('http://localhost:3000/api/posts', {
        cache: 'no-store'
    })
    
    if(!res.ok){
        return notFound
    }

    return res.json()
}



export default async function Blog(){
    const data = await getData()
    
    const posts = Array.isArray(data) ? data : []

    return(
        <div className={styles.mainContainer}>
            {posts[0].map(item=>(
                <div className={styles.container} key={item.id}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={400}
                            height={200}
                            className={styles.image}/>
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <Link href={`blog/${item.id}`} className={styles.btn}>Ler post</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}