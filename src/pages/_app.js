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
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <MDXProvider components={components}>
                    <Component {...pageProps} />
                </MDXProvider>
            </Layout>
        </>
    );
}
