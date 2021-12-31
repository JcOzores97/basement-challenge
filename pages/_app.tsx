import '../styles/global.css'
import type { AppProps } from 'next/app'
import { PurchaseProvider } from '../context/purchase'


function MyApp({ Component, pageProps }: AppProps) {

  return(
  <PurchaseProvider>
    <Component {...pageProps} />
  </PurchaseProvider>)
}
export default MyApp
