'use client'
import useSWR from "swr"
import styles from './page.module.css'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Loading from "@/components/loading/Loading"


export default function Dashboard(){
    const session = useSession()
    const router = useRouter() 
   
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `/api/posts?username=${session?.data?.user.name}`, fetcher
    )

    console.log(data)
    
    if(session.status === 'loading'){
        return<Loading/>
    }
    
    if(session.status === 'unauthenticated'){
        router?.push('/dashboard/login')
    }
    
    //const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
    
    return(
        <h1>Dashboard</h1>
    )
}