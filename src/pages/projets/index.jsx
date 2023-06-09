import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import styles from "@/styles/projets.module.css";
import Image from "next/image";
import Head from "next/head";
import { NextSeo } from "next-seo";

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
            <NextSeo
                title="Projets finalisés de Jérémy Darbellay"
                description="Explorez mes les pages de mes principaux projets finalisés. En outre, vous trouverez un lien direct vers le répertoire, la démonstration et la page de chacun de ces projets."
                openGraph={{
                    url: "https:/jeremydarbellay.github.io/projet_8_openclassrooms/remerciements",
                    title: "Projets finalisés de Jérémy Darbellay",
                    description:
                        "Explorez mes les pages de mes principaux projets finalisés. En outre, vous trouverez un lien direct vers le répertoire, la démonstration et la page de chacun de ces projets.",
                }}
            />
            <div className={styles.Container}>
                <h1> Mes projets finalisés </h1>
                <p>
                    Mon portfolio présente les projets que j'ai réalisés jusqu'à
                    présent au cours de ma formation et de mes expériences
                    pratiques. Chaque projet représente une étape de ma
                    progression en tant que développeur web. J'ai mis en
                    pratique mes connaissances pour créer des sites web
                    fonctionnels et esthétiques, en m'efforçant toujours
                    d'améliorer l'expérience utilisateur. J'aborde chaque projet
                    avec enthousiasme et détermination, en m'adaptant aux
                    besoins spécifiques de mes clients. Vous pourrez retrouver
                    les autres sur mon profil github{" "}
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
                        <article key={`projet-${index.toString()}`}>
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
                                        href={`/projets/${projet.name}`}
                                        className="button"
                                    >
                                        page du projet
                                    </Link>
                                    <Link
                                        href={`${projet.sources}`}
                                        className="button"
                                    >
                                        sources du projet
                                    </Link>
                                    <Link
                                        href={`${projet.demo}`}
                                        className="button"
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

    await items.forEach(async (file) => {
        let projet = await require(`./${file}`);
        projects.push(projet.meta);
    });

    return { props: { projects } };
}
