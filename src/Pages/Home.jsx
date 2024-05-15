import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Artists from '../components/Artists'
import Community from '../components/Community'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <Collections />
        <Artists />
        <Community />
        <Footer />
    </div>
  )
}
