import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ArtificerDEVsolutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

    </div>
  )
}

export default Home
