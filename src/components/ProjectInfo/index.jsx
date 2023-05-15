import styles from './ProjectInfo.module.css'
import Image from "next/image"
import Link from 'next/link'

/**
 * @type {import('react').ReactComponentElement}
 * 
 * @property {Object} meta the project meta
 * @property {Object.String} name
 * @property {Object.String} description
 * @property {Object.String} tags
 * @property {Object.String} sources
 */
export default function ProjectInfo({ meta }) {
    return (
        <>
            <article className={styles.card}>

                <h2 className={styles.header}>Projet : { meta.name }</h2>

                <p className={styles.body}>
                    <strong>Description :</strong> <br />
                    { meta.description }
                </p>
                <p className={styles.footer}>
                    <strong>Tags : </strong>{ meta.tags }
                </p>
                <div>
                        <Link className="button" href={`${meta.sources}`}  >
                            sources du projet
                        </Link>
                        <Link className="button" href={`${meta.demo}`}  >
                            démonstration
                        </Link>
                </div>
            </article>
        </>
    )
}