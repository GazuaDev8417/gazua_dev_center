'use client'
import useSWR from "swr"
import styles from './page.module.css'
import { useSession } from "next-auth/react"


export default function Dashboard(){
    const session = useSession()
    console.log(session)
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
    

    return(
        <div>Dashboard</div>
    )
}