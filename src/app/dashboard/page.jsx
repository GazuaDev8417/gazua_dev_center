'use client'
import useSWR from "swr"
import styles from './page.module.css'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"


export default function Dashboard(){
    const session = useSession()
    const router = useRouter() 
    
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    
    if(session.status === 'loading'){
        return(
            <div className={styles.loadContainer}>
                <div className={styles.loading}/>
                <div>Loading...</div>
            </div>
        )
    }
    
    if(session.status === 'unauthenticated'){
        router?.push('/dashboard/login')
    }
    
    //const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
    
    if(session.status === 'authenticated'){
        return(
            <h1>Dashboard</h1>
        )
    }
}