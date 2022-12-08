import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import Navbar from '../Components/navbar'
import Head from 'next/head'
// import "bootstrap/dist/js/bootstrap.js"


function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(
      <>  
        <Component {...pageProps} />
      </>
    )
  }
  else{
  return (<>
      <Head>
        <title>General Title</title>
      </Head>
     <Navbar />
     <Component {...pageProps} />
  </>
  )
  }
}

export default MyApp
