import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import styles from "@/styles/projets.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Projets({ projects }) {
    return (
        <>
            <Head>
                <title>Projets finalisés de Jérémy Darbellay </title>
                <meta
                    name="description"
                    content="Explorez mes les pages de mes principaux projets finalisés. En outre, vous trouverez un lien direct vers le répertoire, la démonstration et la page de chacun de ces projets."
                />
            </Head>
            <div className={styles.Container}>
                <h1> Mes projets finalisés </h1>
                <p>
                    Vous retrouverez mes différents projets sur cette page,
                    plutôt que de vous innonder de différents projets, je vous
                    en ai sélectionné trois. Vous pourrez retrouver les autres
                    sur mon profil github{" "}
                    <a
                        className="link"
                        href="https://github.com/JeremyDarbellay"
                    >
                        {" "}
                        Jérémy Darbellay sur GitHub
                    </a>
                </p>

                <section className={styles.projectSection}>
                    {projects.map((projet, index) => (
                        <article>
                            <Image
                                src={projet.cover}
                                alt={`projet de ${projet.name}`}
                            />
                            <div className={styles.projectText}>
                                <h2>{projet.name}</h2>
                                <p>
                                    {projet.description} <br />
                                    <strong>{projet.tags}</strong>
                                </p>
                                <div>
                                    <Link
                                        key={index.toString()}
                                        href={`/projets/${projet.name}`}
                                        className={styles.button}
                                    >
                                        page du projet
                                    </Link>
                                    <Link
                                        key={index.toString()}
                                        href={`${projet.sources}`}
                                        className={styles.button}
                                    >
                                        sources du projet
                                    </Link>
                                    <Link
                                        key={index.toString()}
                                        href={`${projet.demo}`}
                                        className={styles.button}
                                    >
                                        démonstration
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </>
    );
}

// load data inside project list
export async function getStaticProps() {
    const root = path.join(process.cwd(), "/src/pages/projets");

    const files = await fs.readdir(root);

    const items = files.filter((file) => file.endsWith(".mdx"));

    let projects = [];

    items.forEach(async (file) => {
        let projet = await require(`./${file}`);
        projects.push(projet.meta);
    });
    console.log(projects);
    return { props: { projects } };
}
