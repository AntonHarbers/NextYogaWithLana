import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col h-screen scrollbar-thin scrollbar-thumb-secondary scrollbar-track-primary overflow-x-hidden'>
      <Head>
        <title>Lana Harbers Educator & Coach</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Header />
      <div className='flex flex-grow bg-primary text-text '>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
