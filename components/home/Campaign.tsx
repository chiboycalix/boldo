import Image from 'next/image'
import React from 'react'
import CampaignBg from "@/assets/images/Backgrounds/CampaignBg.png"
import Heading from '../common/Heading'
import Input from '../common/Input'
import { Button } from '../common/Button'

const Campaign = () => {
  return (
    <div className='container mb-[10rem]'>
      <div className='w-full bg-[#0b2741] relative rounded-lg pb-[3rem]'>
        <Image src={CampaignBg} alt="CampaignBg" className="absolute right-0 rounded-lg" />

        <div className='relative py-[3rem] h-full top-0 flex justify-center'>
          <Heading text="An enterprise template to ramp up your company website" size='large' className='text-white lg:w-[50%] w-[80%] text-center' />
        </div>
        <div className='flex items-center justify-center gap-5 relative sm:flex-row flex-col'>
          <Input placeholder='Your email address' />
          <Button variant='primary'>
            Start now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Campaign