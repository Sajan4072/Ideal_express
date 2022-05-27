import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import MainLayout from '../layouts/Mainlayout'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout title={pageProps.title ? pageProps.title : 'Idle Courier'}>
      <Component {...pageProps} />
    </MainLayout>
  )

}

export default MyApp
