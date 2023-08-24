import Image from 'next/image'

import { Emoq, Hero, Navbar } from '../components';


export default function Home() {
  return (
    // <section className='h-full'>
        
    //   <h1 className='text-black'>hi</h1>
    //   <Hero />

    // </section>
    <>
    <Navbar/>
    <Hero/>
    <Emoq/>
    </>
  )
}
