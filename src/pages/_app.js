import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Script from "next/script";

import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

/* seo */
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

/* fontawesome */
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
config.autoAddCss = false;

const components = {
    a: Link,
};

export default function App({ Component, pageProps }) {
    return (
        <>
            <Script strategy="beforeInteractive">
                if (localStorage.getItem("theme") === "opposite")
                document.documentElement.classList.add("opposite");
            </Script>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={returnDefaultJsonLd()}
                    key="product-jsonld"
                />
            </Head>
            <DefaultSeo {...SEO} />
            <Layout>
                <MDXProvider components={components}>
                    <Component {...pageProps} />
                </MDXProvider>
            </Layout>
        </>
    );
}

function returnDefaultJsonLd() {
    return {
        __html: `{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jérémy Darbellay",
            "jobTitle": "Développeur Web Freelance",
            "description": "Je crée des sites sur mesure et apporte des solutions personnalisées à mes clients.",
            "url": "https://jeremydarbellay.github.io/projet_8_openclassrooms",
            "telephone": "+33614763512",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Saint-Max",
              "postalCode": "54130",
              "addressCountry": "France"
            },
            "email": "jeremy.darbellay@gmail.com",
            "sameAs": [
              "https://www.linkedin.com/in/jeremydarbellay",
              "https://github.com/JeremyDarbellay",
              "https://www.malt.fr/profile/jeremydarbellay"
            ]
        }`
    }
}