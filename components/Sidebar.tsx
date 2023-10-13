"use client"
import Link from "next/link";
import styles from "./utils.module.css";
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Sidebar(){
    const links = [
        {label: 'Accueil', path: '/', targetSegment: null}, 
        {label: 'À propos', path: '/about', targetSegment: 'news'},
        {label: 'Contact', path: '/contact', targetSegment: 'contact'}
      ];
      const activeSegment = useSelectedLayoutSegment()
    return(
        
        <div className={`${styles.sidebar}`}>
        {links.map ( (l, i) => {
            return <Link 
                  key={i} 
                  href={l.path}
                  style={{textDecoration: (activeSegment === l.targetSegment) ? 'underline' : 'none'}}>
                {l.label}
            </Link>
        })}
        </div>
    )
}