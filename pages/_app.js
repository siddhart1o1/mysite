import '../styles/globals.css'
import { Fragment } from 'react'
import NavBar from '../components/navbar/navbar'
import mainHeroComponent from '../components/heroSection/mainherocomponent'
function MyApp({ Component, pageProps }) {

  return (<Fragment>
  <NavBar />
  <Component {...pageProps} />
  </Fragment> )
}

export default MyApp
