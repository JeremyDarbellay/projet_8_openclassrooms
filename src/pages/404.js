import { useEffect } from 'react'
import { useRouter } from 'next/router'

// error page
export default function Custom404() {

  const router = useRouter()
  useEffect(() => {
    router.push('/404')
  }, [])

  return <h1>404 - Page Not Found</h1>
  
  }
  