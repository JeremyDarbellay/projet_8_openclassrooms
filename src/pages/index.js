import Head from "next/head";
import Image from "next/image";

import OfficeImage from '../assets/office.jpg';
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
                <button className="button"><a>C.V.</a></button>
                <button className="button"><a>Projets</a></button>
                <button className="button"><a>Compétences</a></button>
              </div>
            </div>
        </section>
        <section>
          <h2>À propos de moi</h2>
          <p>Je m'appelle Jérémy Darbellay, je suis développeur Web, j'ai eu un parcours diversifié, au début, j'ai fais un cursus licence et master de Psychologie, puis je me suis réorienté vers le développement Web. Aujourd'hui je suis fier de terminer ma formation Développeur Web de l'institution OpenClassrooms. J'ai pu expérimenter et apprendre sur différents projets, que vous pourrez découvrir par la suite.</p>
        </section>
        <section>
          <h2>Mes compétences</h2>
          <p>Liste de compétences etc.</p>
        </section>
        <section>
          <h2>Mes projets finalisés</h2>
          <p>Parler des projets</p>
        </section>
      </div>
    </>
  );
}
