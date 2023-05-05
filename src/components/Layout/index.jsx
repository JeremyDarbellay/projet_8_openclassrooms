import Link from 'next/link'
import styles from './layout.module.css'

import { useEffect, useState } from 'react'

export default function Layout({ children }) {

    const [ oppositeMode, setOppositeMode ] = useState(false);
    const [animated, setAnimated] = useState(false);
    const animationInProgress = animated ? styles.animated : '';

    useEffect( () => {
        if (document.documentElement.classList.contains("opposite")) {
                setOppositeMode(true);
        }
    }, [])

    function handleToggleModeButtonClick() {

        setAnimated(true)

        setTimeout(() => {

            document.documentElement.classList.toggle('opposite');

            if (typeof window !== "undefined") {
                localStorage.getItem('theme') === 'opposite' ? localStorage.removeItem('theme') : localStorage.setItem('theme', 'opposite');
            }
            

            setOppositeMode(!oppositeMode);

            setAnimated(false)

        }, 100)


    }


    return (
      <>
        <header className={styles.header}>
            <button className={styles.logo}><Link href="/">Jérémy Darbellay</Link></button>
            <nav>
                <ul>
                    <li>
                        <Link href="/curriculum_vitae" className="link">C.V.</Link>
                    </li>
                    <li>
                        <Link href="/projets" className="link">Projets</Link>
                    </li>
                    <li>
                        <Link href="/competences" className="link">Compétences</Link>
                    </li>
                    <li>
                        <button className={`${animationInProgress} ${styles.colorButton}`} onClick={handleToggleModeButtonClick}>thème</button>
                    </li>
                </ul>
            </nav>
        </header>

        <main className="main">{children}</main>

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