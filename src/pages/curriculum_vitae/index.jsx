import styles from "@/styles/curriculum_vitae.module.css";
import Link from "next/link";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt, faMobile } from "@fortawesome/free-solid-svg-icons";

export default function CurriculumVitae() {

    function printDocument() {
        const input = document.getElementById("pdf");
        input.style.color = "black";
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png", 1);
            const pdf = new jsPDF("portrait", "pt", "a4");
            pdf.addImage(imgData, "JPEG", 0, 0);
            // pdf.output("dataurlnewwindow", "cv_darbellay_jeremy.pdf");
            pdf.save("download.pdf");
            input.style.color = null;
        });
    }

    return (
        <>
            <h1>Curriculum Vitae</h1>
            <button onClick={printDocument}>Télécharger le PDF</button>
            <div className={styles.shadow}>
                <article className={styles.feuille} id="pdf">
                    <header className={styles.header}>
                        <div>
                            <h2>Darbellay Jérémy </h2>
                            <h3>Développeur Web Freelance</h3>
                            <p>
                                Prédominance Front-End, React, JavaScript,
                                Optimisation et SEO
                            </p>
                        </div>
                        <div>
                            <h3>Informations</h3>
                            <p>
                                <strong>Localisation</strong> : Nancy, Lorraine
                                <br />
                                <strong>Mobilité</strong> : 30 minutes (Permis B
                                + voiture)
                                <br />
                                <strong>Portfolio : </strong>
                                <Link href="https://jeremydarbellay.github.io/projet_8_openclassrooms">
                                    https://jeremydarbellay.github.io/projet_8_openclassrooms
                                </Link>
                                <br />
                            </p>
                        </div>
                    </header>
                    <div className={styles.mainContainer}>
                        <div className={styles.leftContainer}>
                            <section className={styles.parcours}>
                                <h2>Études</h2>
                                <h3>
                                    Cursus de Psychologie - Licence et Master
                                </h3>
                                <p>
                                    Université de Lorraine - Université
                                    Grenobles-Alpes
                                    <br />
                                    <em>Orientation Clinique et Sociale</em>
                                    <br />
                                </p>
                                <p>
                                    <strong>Compétences développées :</strong>
                                    <br />
                                    Analyse des besoins, observation, rigueur
                                    scientifique, ...
                                </p>
                                <h3>Développeur Web - Niveau 5</h3>
                                <p>
                                    12/2022 - 05/2023 - OpenClassrooms
                                    <br />
                                    Réalisation de 7 projets professionnalisants
                                    orientés front-end.
                                </p>
                                <p>
                                    <strong>Compétences développées :</strong>
                                    <br />
                                    Langages du web, bonnes pratiques,
                                    réalisation de projets, ...
                                    <br />
                                    HTML5, CSS3, JavaScript, React.js, MERN
                                    Stack, SEO, Accessibilité
                                </p>
                            </section>
                            <section className={styles.projets}>
                                <h2>Projets</h2>
                                <h3>Mon portfolio</h3>
                                <p>
                                    <em>Next.js, Mdx et GitHubPages</em><br/>
                                    Développement et mise en ligne de mon portfolio 
                                    <ul>
                                        <li>Utilisation de Next.js pour une génération statique des pages</li>
                                        <li>Utilisation et intégration de MDX pour une rédaction facilitée</li>
                                        <li>Mise en ligne via GitHub, sources accessibles au public</li>
                                        <li>Génération de PDF, thème adaptatif et autres fantaisies</li>
                                    </ul>
                                </p>
                                <h3>
                                    Kasa - Location d'appartements entre
                                    particuliers
                                </h3>
                                <p>
                                    <em>React.js et ReactRouter</em><br/>
                                    Construction du front-end pour une site de location entre particuliers 
                                    <ul>
                                        <li>Utilisation de React, routage via ReactRouter</li>
                                        <li>Pas de frameworks, ni de dépendances React ajoutées.</li>
                                        <li>Routes dynamiques et chargement des données.</li>
                                        <li>Respect des maquettes et client side routing</li>
                                    </ul>
                                </p>
                                <h3>NinaCarducci</h3>
                                <p>
                                    <em>SEO, Optimisation et Accessibilité</em><br/>
                                    Optimisation du site d'une photographe à bordeaux 
                                    <ul>
                                        <li>réduction du poids de la page (image et sources)</li>
                                        <li>ajout référencement naturel</li>
                                        <li>amélioration de l'accessibilité pour une navigation au clavier</li>
                                        <li>Amélioration des scores LightHouse et GTMetrix</li>
                                    </ul>
                                </p>
                            </section>
                        </div>
                        <div className={styles.rightContainer}>
                            <section className={styles.objectifs}>
                                <h2>Objectifs</h2>
                                <p>
                                    Continuer à découvrir, expérimenter et
                                    apprendre le web, tout en améliorant mes
                                    bonnes pratiques.
                                    <br />
                                    Apporter des solutions réalistes à des
                                    entreprises de toutes tailles.
                                </p>
                            </section>
                            <section className={styles.competences}>
                                <h2>Compétences</h2>
                                <div>HTML5</div>
                                <div>CSS3</div>
                                <div>JavaScript</div>
                                <div>SEO</div>
                                <div>Accessibilité</div>
                                <div>React.js</div>
                                <div>Next.js</div>
                                <div>Node.js</div>
                                <div>Express.js</div>
                                <div>MongoDB</div>
                                <div>PHP8</div>
                                <div>Drupal</div>
                                <div>Git </div>
                                <div>RestFull API</div>
                            </section>
                            <footer className={styles.contact}>
                                <h2>Contact</h2>
                                <p>
                                    <FontAwesomeIcon icon={faAt} />{" "}
                                    <a mailto="jeremy.darbellay@gmail.com">
                                        jeremy.darbellay@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faMobile} />{" "}
                                    06.14.76.35.12
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faLinkedin} />{" "}
                                    <Link href="https://www.linkedin.com/in/jeremydarbellay">
                                        https://www.linkedin.com/in/jeremydarbellay
                                    </Link>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faGithub} />{" "}
                                    <Link href="https://github.com/JeremyDarbellay">
                                        https://github.com/JeremyDarbellay
                                    </Link>
                                </p>
                            </footer>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
