import styles from './Card.module.css'
import Image from "next/image"

export default function Card({ title, image, body, footer}) {
    return (
        <>
            <article className={styles.card}>
                <div className={styles.header}>{ title }</div>
                <Image className={styles.image} src={image} alt={`image du projet ${ title }`}/>
                <div className={styles.body}>{ body }</div>
                <div className={styles.footer}>{ footer }</div>
            </article>
        </>
    )
}