import Image from "next/image"
import styles from './page.module.css'
import { notFound } from "next/navigation"
import Link from "next/link"


const getData = async(id)=>{
    const res = await fetch(`https://myblog-vert-ten.vercel.app/post/${id}`, {
        cache: 'no-store'
    })
  
    if(!res.ok){
        return notFound
    }

    return res.json()
}

export async function generateMetadata({ params }){
    const post = await getData(params.id)

    return{
        title: post.title,
        description: 'Posts do site https://123pense.blogspot.com/'
    }
}



export default async function BlogPost({ params }){
    const data = await getData(params.id)
    
    return(
        <div className={styles.container}>
           <div className={styles.top}>
                <h1 className={styles.title}>{data.title}</h1>
                <div className={styles.info}>
                    <p className={styles.desc}>{data.body}</p>
                    <div className={styles.author}>
                        <Image
                            src={data.image}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <Link 
                            href='https://123pense.blogspot.com'
                            target="_blank"
                            className={styles.username}>
                            Flamarion França
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}