
import {promises as fs} from 'fs'
import path from 'path'
import Link from 'next/link'
import Card from '@/components/Card'
import styles from './projets.module.css'

export default function Projets({ projects }) {
    
    return (
        <div className={styles.Container}>
            
            <h1> Mes projets finalisés </h1>
            <p>Vous retrouverez mes différents projets sur cette page, plutôt que de vous innonder de différents projets, je vous en ai sélectionné trois. Vous pourrez retrouver les autres sur mon profil github <a className="link" href="https://github.com/JeremyDarbellay"> Jérémy Darbellay sur GitHub</a></p>

            <ul className={styles.projectList}>
                { projects.map( (projet, index) => 
                    <Link key={index.toString()} href={`/projets/${projet.name}`}>
                        <Card title={ projet.name } image={ projet.cover } body={ projet.description } footer={ projet.tags }/>
                    </Link>
                )}
            </ul>

        </div>
    )
}

// load data inside project list
export async function getStaticProps() {

    const root = path.join(process.cwd(), '/src/pages/projets')

    const files = await fs.readdir(root)
    
    const items = files
        .filter( file => file.endsWith('.mdx'));

    let projects = [];

    items.forEach( (file) => {
        let projet = require(`./${file}`);
        projects.push(projet.meta);

    })

    return { props: { projects } }
}