import Head from "next/head";
import Image from "next/image";

import OfficeImage from "../assets/office.jpg";
import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio de Jérémy Darbellay </title>
                <meta
                    name="description"
                    content="Bienvenue sur mon Portoflio, je suis Jérémy Darbellay, développeur freelance à Nancy. Venez explorer mes projets et mon C.V. et me connaître un peu mieux"
                />
            </Head>

            <div className={`${styles.accueil} full-width`}>
                <section className={styles.mainSection}>
                    <Image
                        className={styles.officeImage}
                        src={OfficeImage}
                        alt="Un humain dessiné en fils"
                        width="600"
                    />
                    <div>
                        <h1>Jérémy Darbellay en quelques clics</h1>
                        <div>
                            <button className="button">
                                <a href="https://github.com/JeremyDarbellay">GitHub</a>
                            </button>
                            <button className="button">
                                <a href="https://www.linkedin.com/in/jeremydarbellay">LinkedIn</a>
                            </button>
                            <button className="button">
                                <a href="https://www.malt.fr/profile/jeremydarbellay">
                                    Malt
                                </a>
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>À propos de moi</h2>
                    <p>
                        Je m'appelle Jérémy Darbellay, je suis développeur Web,
                        j'ai eu un parcours diversifié, au début, j'ai fais un
                        cursus licence et master de Psychologie, puis je me suis
                        réorienté vers le développement Web. Aujourd'hui je suis
                        fier de terminer ma formation Développeur Web de
                        l'institution OpenClassrooms. J'ai pu expérimenter et
                        apprendre sur différents projets, que vous pourrez
                        découvrir par la suite.
                    </p>
                </section>
                <section>
                    <h2>Mes compétences</h2>
                    <p>
                        Grâce à ma formation et à mon expérience, je saurais
                        vous apporter les solutions à vos projets. Je maîtrise
                        les langages de base du web comme HTML5 et CSS3 pour
                        vous proposer une interface adapter à vos besoins.
                    </p>
                    <p>
                        J'ai également pu développer quelques back-end, ainsi je
                        pourrais également vous aider sur ce point et vous
                        conseiller sur des options réelles et viables.
                    </p>
                </section>
                <section>
                    <h2>Mes projets finalisés</h2>
                    <p>
                        Mon apprentissage du développement s'est fait au travers
                        de la construction de 7 projets professionnalisants,
                        j'ai commencé par l'intégration d'une maquette via HTML
                        et CSS, poursuivi par la création d'interfaces
                        dynamiques via Javascript.
                        <br />
                        Pour la suite, j'ai organisé la gestion de projet pour
                        la création d'un site internet.
                        <br />
                        J'ai ensuite approfondi toutes ces connaissances en
                        allant un peu plus loin, par l'optimisation SEO d'un
                        site de photographe, la création d'un site via React
                        pour une agence de location entre particuliers,
                        l'établissement du back office d'un site de notation de
                        livre et terminé par la création de ce Portofolio en
                        appliquant toutes mes connaissances précédemment
                        acquises.
                    </p>
                    <p>
                        Aimant les défis, j'ai essayé d'aller plus loin que les
                        objectifs de chaque projets afin d'acquerir des
                        compétences plus larges. vous retrouverez ces projets
                        sur mon profil Github et sur ma page de projets.
                    </p>
                </section>
            </div>
        </>
    );
}
