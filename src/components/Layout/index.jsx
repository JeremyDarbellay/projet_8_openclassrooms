import Link from 'next/link'
import styles from './layout.module.css'


export default function Layout({ children }) {
    return (
      <>
        <header className={styles.header}>
            <Link className={styles.logo} href="/">Jérémy Darbellay</Link>
            <nav>
                <ul>
                    <li className={styles.mainLink}>
                        <Link href="/cv">C.V.</Link>
                    </li>
                    <li className={styles.mainLink}>
                        <Link href="/projets">Projets</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <main>{children}</main>

        <footer className={styles.footer}>
            © Darbellay Jérémy - 2023
        </footer> 
      </>
    )
  }