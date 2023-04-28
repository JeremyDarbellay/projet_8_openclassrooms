import Link from 'next/link'
import styles from './layout.module.css'


export default function Layout({ children }) {
    return (
      <>
        <header className={styles.header}>
            <button className={styles.logo}><Link href="/">Jérémy Darbellay</Link></button>
            <nav>
                <ul>
                    <li className={styles.mainLink}>
                        <Link href="/cv" className="link">C.V.</Link>
                    </li>
                    <li className={styles.mainLink}>
                        <Link href="/projets" className="link">Projets</Link>
                    </li>
                    <li className={styles.mainLink}>
                        <Link href="/competences" className="link">Compétences</Link>
                    </li>
                    <li className={styles.mainLink}>
                        <button>Color mode</button>
                    </li>
                </ul>
            </nav>
        </header>

        <main>{children}</main>

        <footer className={styles.footer}>
            <p>© Darbellay Jérémy - 2023</p>
            <ul>
                <li>
                    <Link className="link" href="/">contact</Link>
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