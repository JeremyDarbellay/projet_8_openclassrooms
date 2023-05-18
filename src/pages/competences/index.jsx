import Tabs from "@/components/Tabs";
import styles from "@/styles/competences.module.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Competences() {
    return (
        <>
            <Head>
                <title>Compétences de Jérémy Darbellay</title>
                <meta
                    name="description"
                    content="Vous retrouverez une vue d'ensemble de mes compétences sur cette page, ainsi que les différentes technologies que je maîtrise et mon parcours éducatif"
                />
            </Head>
            <NextSeo
                title="Compétences de Jérémy Darbellay"
                description="Vous retrouverez une vue d'ensemble de mes compétences sur cette page, ainsi que les différentes technologies que je maîtrise et mon parcours éducatif"
                openGraph={{
                    url: "https:/jeremydarbellay.github.io/projet_8_openclassrooms/remerciements",
                    title: "Compétences de Jérémy Darbellay",
                    description:
                        "Vous retrouverez une vue d'ensemble de mes compétences sur cette page, ainsi que les différentes technologies que je maîtrise et mon parcours éducatif",
                }}
            />
            <div className={styles.container}>
                <h1 className={styles.heading}>
                    Découvrez mon parcours et mes compétences
                </h1>
                <section>
                    <h2>Langages et Frameworks Front-End</h2>
                    <Tabs tabsContent={contentFront} />
                </section>
                <section>
                    <h2>Mon parcours</h2>
                    <p>
                        J'ai commencé mon parcours académique en étudiant la
                        psychologie à l'université, où j'ai obtenu une licence
                        et un master. J'ai acquis des compétences en recherche,
                        en analyse de données et en communication, qui me sont
                        utiles dans mon travail de développeur web. Après avoir
                        découvert ma passion pour la technologie, j'ai suivi une
                        formation professionnelle de développeur web chez
                        OpenClassrooms, où j'ai travaillé sur une série de
                        projets pratiques pour acquérir des compétences en
                        développement front-end. Ces projets m'ont permis de
                        maîtriser HTML, CSS et JavaScript, ainsi que des outils
                        et des frameworks tels que Bootstrap, React et Next.js.
                    </p>
                    <p>
                        Je suis toujours en train d'apprendre et de
                        perfectionner mes compétences, en suivant des cours en
                        ligne et en travaillant sur des projets personnels et
                        professionnels. Je suis persuadé que mes connaissances
                        et mon engagement envers l'excellence technique me
                        permettront de réaliser des projets web captivants et
                        innovants.
                    </p>
                </section>
                <section>
                    <h2>Langages et Frameworks Back-End</h2>
                    <Tabs tabsContent={contentBack} />
                </section>
            </div>
        </>
    );
}

const contentFront = [
    {
        title: "HTML5 et CSS3",
        content:
            "Lors de mon deuxième projet, j'ai intégré une maquette via les langages HTML5 et CSS3. Ensuite, j'ai pu développer mes compétences dans ces deux langages sur mes autres projets par la création de sites internet, comme ces deux langages forment la base d'une page web, il sont inévitables et leur maîtrise est essentielle pour tout développeur web. Ainsi, je suis à l'aise avec la structure et la sémantique d'HTML5 pour la création de sites web, je maîtrise également, les principales propriétés et techniques pour créer des mises en page attrayantes et responsives.",
    },
    {
        title: "Javascript",
        content:
            "JavaScript est un langage de programmation complet, permettant une manipulation du DOM sans rechargement de la page. Je dispose aujourd'hui de plusieurs projets basés sur Javascript, allant de la manipulation de l'interface sans framework en utilisant les capacités du langage à la création d'un front complexe basé sur React.js et ses subtilités. Je vous coderai des scripts fonctionnels et dynamiques pour ajouter de l'intéractivité à vos pages Web.",
    },
    {
        title: "React.js et Next.js",
        content:
            "Les technologies et besoins grandissant de web ont conduit à l'élaboration de librairies et de framework toujours plus poussées. Aujourd'hui React, une technologie développée par Facebook est devenu un outil essentiel et reconnu dans le milieu du web. J'ai pu développer un front entièrement grâce à cette librairie sans accumuler les dépendances externes, de plus au travers de ce portfolio, j'ai pu expérimenter le framework Next.js poussant un peu plus loin les capacités de React.",
    },
];

const contentBack = [
    {
        title: "Node.js, Express.js et MongoDB",
        content:
            "J'ai développé un back-end en JavaScript lors de la construction d'un site de notation de livres. Cette application basée sur Node, Express et Mongo avait pour but la construction d'une API RestFull communiquant avec un front-end en React. Avec une gestion intelligente des fichiers, la sécurisation de l'application et l'intégration des fonctionnalités, cette application légère et robuste est une réussite",
    },
    {
        title: "PHP8, Drupal et MySQL",
        content:
            "Pour un projet personnel, j'ai eu l'occasion de construire un site internet de A à Z, ayant le CMS (ou plutôt CMF) Drupal pour base. je suis parti de 0 pour ce projet, de la location d'un VPS jusqu'à la mise en ligne finale du site internet. J'ai donc pu expérimenté le full-stack lors de la conduite d'un projet complet de la conception à la mise en production.",
    },
];
