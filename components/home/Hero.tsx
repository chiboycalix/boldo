import Image from 'next/image'
import React from 'react';
import BannerChart from "@/assets/images/BannerChart.svg"
import { Button } from '../common/Button';
import Heading from '../common/Heading';

const Hero = () => {
  return (
    <div className='flex items-center justify-between gap-[8rem] lg:flex-row flex-col'>
      <div className='lg:basis-1/2 text-center lg:text-left basis-1'>
        <Heading text='Save time by building fast with Boldo Template' size='large' className='text-white' />
        <p className='text-[#F1F1F1] leading-[28px] text-base mt-[1rem]'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>

        <div className='mt-10 flex gap-4 justify-center lg:justify-start 2xs:flex-row flex-col'>
          <Button variant='primary'>
            Buy template
          </Button>
          <Button variant='outline'>
            Explore
          </Button>
        </div>
      </div>
      <div className='flex-1 w-full'>
        <Image src={BannerChart} alt='BannerChart' className='w-full' />
      </div>
    </div>
  )
}

export default Hero;