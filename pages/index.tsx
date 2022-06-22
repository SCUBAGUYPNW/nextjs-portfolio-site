import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

export default function Home() {
     return (
       <div>
        <Head>
           <title>ArtificerDEVsolutions</title>
           <link rel="icon" href="/favicon.ico" />
         </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />

    </div>
  )
}
