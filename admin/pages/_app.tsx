import '../styles/global.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {
        pageProps.page && pageProps.page === '/' || pageProps.page === " " ?
          <Component {...pageProps} />
          :
          <MainLayout title={pageProps.title ? pageProps.title : ""} >
            <Component {...pageProps} />
          </MainLayout>
      }
    </>
  )
}

export default MyApp
