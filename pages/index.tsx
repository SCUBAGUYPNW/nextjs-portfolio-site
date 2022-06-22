import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'
import Navbar from '../components/navbar'

export default function Home() {
     return (
       <div>
        <Head>
           <title>ArtificerDEVsolutions</title>
           <link rel="icon" href="/favicon.ico" />
         </Head>
      <Navbar />
      <Main />

    </div>
  )
}
