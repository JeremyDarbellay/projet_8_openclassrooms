import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Script from 'next/script'
 
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'

 
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
