import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/components/Header/Header.scss'
import '@/components/About/About.scss'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
