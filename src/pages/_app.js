import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Script from 'next/script'
 
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'

/* fontawesome */
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

 
const components = {
  a: Link,
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="/theme.js" strategy="beforeInteractive"/>
      <Layout>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </>
  )
}
