'use client'
import Link from "next/link"
import styles from './navbar.module.css'
import DarkModeToggle from "../darkMode/DarkModeToggle"
import { signOut, useSession } from "next-auth/react"



const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfólio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "Sobre",
      url: "/about",
    },
    {
      id: 5,
      title: "Contato",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ]

export default function Navbar(){
    const session = useSession()

    return(
        <div className={styles.container}>
            <Link href='/' className={styles.logo}>
              Gazua Dev Center
            </Link>
            <div className={styles.links}>
                <DarkModeToggle/>
                {links.map(link=>(
                    <Link key={link.id} href={link.url} className={styles.link}>
                      {link.title}
                    </Link>
                ))}
                {session.status === 'authenticated' &&(
                    <button
                    onClick={signOut} 
                    className={styles.logout}>
                      Logout
                    </button>
                  )
                }
            </div>
        </div>
    )
}