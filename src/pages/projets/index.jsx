
import {promises as fs} from 'fs'
import path from 'path'
import Link from 'next/link'

export default function Projets({ projects }) {
    
    return (
        <>
            <h1> Mes projets finalisés </h1>
            <p>Introduction projets @TODO</p>

            <ul>
                { projects.map( (projet, index) => <Link key={index.toString()} href={`/projets/${projet.name}`}>{ projet.name }</Link> ) }
            </ul>

        </>
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