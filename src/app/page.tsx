"use client"

import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Stack from '@/components/Stack'
import Footer from '@/components/footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='relative z-0 flex flex-col w-100%'>
        <Header/>
        <AboutMe/>
        <Stack/>
        <Contact/>
        <Footer />
      </div>
    </>
  )
}
