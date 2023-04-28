import Link from 'next/link'
import styles from './layout.module.css'

import { useEffect, useState } from 'react'

export default function Layout({ children }) {


    useEffect( () => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem('theme') === 'opposite') document.documentElement.classList.add('opposite');
        }
    }, [])

    const [ oppositeMode, setOppositeMode ] = useState(false);

    function handleToggleModeButtonClick() {

        document.documentElement.classList.toggle('opposite');

        if (typeof window !== "undefined") {
            localStorage.getItem('theme') === 'opposite' ? localStorage.removeItem('theme') : localStorage.setItem('theme', 'opposite');
        }

        setOppositeMode(!oppositeMode);

    }


    return (
      <>
        <header className={styles.header}>
            <button className={styles.logo}><Link href="/">Jérémy Darbellay</Link></button>
            <nav>
                <ul>
                    <li className={styles.mainLink}>
                        <Link href="/curriculum_vitae" className="link">C.V.</Link>
                    </li>
                    <li className={styles.mainLink}>
                        <Link href="/projets" className="link">Projets</Link>
                    </li>
                    <li className={styles.mainLink}>
                        <Link href="/competences" className="link">Compétences</Link>
                    </li>
                    <li className={styles.mainLink}>
                        <button onClick={handleToggleModeButtonClick}>Color mode</button>
                    </li>
                </ul>
            </nav>
        </header>

        <main>{children}</main>

        <footer className={styles.footer}>
            <p>© Darbellay Jérémy - 2023</p>
            <ul>
                <li>
                    <Link className="link" href="mailto:jeremy.darbellay@gmail.com">contact</Link>
                </li>
                <li>
                    <Link className="link" href="/legal_terms">mentions légales</Link>
                </li>
                <li>
                    <Link className="link" href="/remerciements">remerciements</Link>
                </li>
            </ul>
        </footer> 
      </>
    )
  }