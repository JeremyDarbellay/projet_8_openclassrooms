import Head from "next/head";
import Image from "next/image";

import OfficeImage from "public/images/office.jpg";
import styles from "@/styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { NextSeo } from "next-seo"

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
            <NextSeo 
                title="Portfolio de Jérémy Darbellay"
                description="Bienvenue sur mon Portoflio, je suis Jérémy Darbellay, développeur freelance à Nancy. Venez explorer mes projets et mon C.V. et me connaître un peu mieux"
                openGraph={{
                  url: 'https:/jeremydarbellay.github.io/projet_8_openclassrooms',
                  title: 'Portfolio de Jérémy Darbellay',
                  description: 'Bienvenue sur mon Portoflio, je suis Jérémy Darbellay, développeur freelance à Nancy. Venez explorer mes projets et mon C.V. et me connaître un peu mieux',
                }}
            />

            <div className={`${styles.accueil} full-width`}>
                <section className={styles.mainSection}>
                    <Image
                        className={styles.officeImage}
                        src={OfficeImage}
                        alt="Un homme travaillant sur un ordinateur dans son bureau"
                        width="600"
                    />
                    <div>
                        <h1>Jérémy Darbellay en quelques mots</h1>
                        <p>
                            Bienvenue sur mon site personnel ! Je suis un
                            passionné de développement Web à la recherche de
                            nouvelles opportunités et de défis stimulants. Avec
                            une solide expérience dans la création de sites
                            internet modernes et fonctionnels, je suis
                            constamment à l'affût des dernières tendances et
                            technologies du domaine. Explorez mon portfolio pour
                            découvrir mes projets et compétences.
                        </p>
                        <div>
                            <a
                                className="button"
                                href="https://github.com/JeremyDarbellay"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                                GitHub
                            </a>
                            <a
                                className="button"
                                href="https://www.linkedin.com/in/jeremydarbellay"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                                LinkedIn
                            </a>
                            <a
                                className="button"
                                href="https://www.malt.fr/profile/jeremydarbellay"
                            >
                                {" "}
                                <MaltLogo className="svg-inline--fa" />
                                Malt
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>À propos de moi</h2>
                    <p>
                        Je suis un passionné de développement web qui a
                        récemment fait le choix de se reconvertir. Mon parcours
                        atypique comprend des études de psychologie et une
                        expérience de travail dans l'industrie. J'ai décidé de
                        suivre ma passion pour la technologie et d'embrasser une
                        carrière dans le développement web. Ma formation chez
                        OpenClassrooms m'a permis d'acquérir des connaissances
                        solides en matière de développement web et de me
                        familiariser avec les dernières tendances de
                        l'industrie. Je suis enthousiaste à l'idée d'apporter ma
                        créativité et mes compétences techniques au service de
                        projets web captivants.
                    </p>
                </section>
                <section>
                    <h2>Mes compétences</h2>
                    <p>
                        Fort de ma formation de Développeur Web chez OpenClassrooms, je maîtrise
                        les fondamentaux du développement web, notamment les
                        langages HTML, CSS et JavaScript. Je suis également
                        familier avec des concepts tels que la création de sites
                        web responsives et l'utilisation de frameworks
                        populaires tels que React.js. J'ai également pu me
                        sensibiliser aux principes de l'accessibilité et des
                        optimisations pour moteur de recherches, afin de
                        garantir la création de sites agréables à visiter pour
                        tous les visiteurs. Je continue à enrichir mes
                        compétences en me tenant au courant des dernières
                        avancées technologiques et en participant à des projets
                        pratiques.
                    </p>
                    <p>
                        Ma formation m'a également permis de comprendre les
                        bases de données et d'acquérir des compétences en
                        programmation côté serveur avec Node.js et MongoDB,
                        ainsi je pourrais également vous aider sur ce point et
                        vous conseiller sur des options réelles et viables ou
                        vous apporter des solutions à ma mesure.
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

const MaltLogo = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Malt"
        viewBox="0 0 512 512"
        {...props}
    >
        <rect width={512} height={512} fill="transparent" rx="15%" />
        <path
            fill="currentColor"
            d="M408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8 34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4-4.6-23.3-17.9-44.4-53.3-44.4S207.3 63 202.8 86.3c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2 5 23.8 19 45.5 53.1 45.5 34.2 0 48.3-21.9 53.2-45.7-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5 0 34.3 21.9 48.3 45.8 53.2 2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6 0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2-25 25-19.4 49.4-6.2 69.1 4.1-.3 123.4-.6 123.4-.6zM290.4 339l-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3 24.2-24.2 18.7-49.7 5.3-70-4.3.3-123.2.6-123.2.6z"
        />
    </svg>
);
