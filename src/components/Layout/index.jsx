import Link from "next/link";
import styles from "./layout.module.css";

import { useEffect, useState } from "react";

export default function Layout({ children }) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [oppositeMode, setOppositeMode] = useState(false);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (document.documentElement.classList.contains("opposite")) {
            setOppositeMode(true);
        }
    }, []);

    function handleOpenNavClick() {
        setAnimated(true);
        setTimeout(() => {
            setMobileNavOpen(!mobileNavOpen);
            setAnimated(false);
        }, 100);
    }

    function handleToggleModeButtonClick() {

        setAnimated(true);

        setTimeout(() => {
            document.documentElement.classList.toggle("opposite");

            if (typeof window !== "undefined") {
                localStorage.getItem("theme") === "opposite"
                    ? localStorage.removeItem("theme")
                    : localStorage.setItem("theme", "opposite");
            }

            setOppositeMode(!oppositeMode);
            setAnimated(false);
        }, 100);
    }

    return (
        <>
            <header className={styles.header}>
                <button className={styles.logo}>
                    <Link href="/">Jérémy Darbellay</Link>
                </button>
                <button
                    onClick={handleOpenNavClick}
                    className={
                        animated
                            ? ` ${styles.toggleNav} ${styles.animated}`
                            : styles.toggleNav
                    }
                >
                    Navigation
                </button>
                <nav className={mobileNavOpen ? `${styles.visible}` : null}>
                    <ul>
                        <li>
                            <Link href="/curriculum_vitae" className="link">
                                C.V.
                            </Link>
                        </li>
                        <li>
                            <Link href="/projets" className="link">
                                Projets
                            </Link>
                        </li>
                        <li>
                            <Link href="/competences" className="link">
                                Compétences
                            </Link>
                        </li>
                        <li>
                            <button
                                className={
                                    animated
                                        ? `${styles.animated} ${styles.colorButton}`
                                        : styles.colorButton
                                }
                                onClick={handleToggleModeButtonClick}
                            >
                                thème
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="main">{children}</main>

            <footer className={styles.footer}>
                <p>© Darbellay Jérémy - 2023</p>
                <ul>
                    <li>
                        <Link
                            className="link"
                            href="mailto:jeremy.darbellay@gmail.com"
                        >
                            contact
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="/legal_terms">
                            mentions légales
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="/remerciements">
                            remerciements
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    );
}
