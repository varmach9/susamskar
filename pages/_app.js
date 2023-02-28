
import 'bootstrap/dist/css/bootstrap.css'
import MyFooter from '../components/footer'
import Head from 'next/dist/next-server/lib/head'
import Mynavbar from '../components/header'
import  "../styles/globals.css"
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { SSRProvider } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return <SSRProvider>
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <title>Susamskar Foundation | Inspire Enlighten Instill</title>
    </Head>
    <Mynavbar />
  <Component {...pageProps} />
  <MyFooter />
  </SSRProvider>
}

export default MyApp

