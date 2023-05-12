import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Script from "next/script";

import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

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
            </Head>
            <Layout>
                <MDXProvider components={components}>
                    <Component {...pageProps} />
                </MDXProvider>
            </Layout>
        </>
    );
}
