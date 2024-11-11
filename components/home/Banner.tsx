import React from 'react'
import Image from "next/image";
import BannerBg from "@/assets/images/Backgrounds/BannerBg.svg"
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";

const Banner = () => {
  return (
    <div className='min-h-screen bg-[#0b2741] relative w-full'>
      <Image src={BannerBg} alt="BannerBg" className="absolute right-0" />
      <div className="relative container pt-[3rem] h-full top-0">
        <Navbar />
        <div className="mt-[4rem]">
          <Hero />
        </div>
        <div className="mt-[4rem]">
          <Partners />
        </div>
      </div>
    </div>
  )
}

export default Banner