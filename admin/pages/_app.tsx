import '../styles/global.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/MainLayout'
import GlobalContextProvider from '../contexts/GlobalContext'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider >
      {
        pageProps.page && pageProps.page === '/' || pageProps.page === " " ?
          <Component {...pageProps} />
          :
          <MainLayout title={pageProps.title ? pageProps.title : ""} >
            <Component {...pageProps} />
          </MainLayout>
      }
    </GlobalContextProvider>
  )
}

export default MyApp
