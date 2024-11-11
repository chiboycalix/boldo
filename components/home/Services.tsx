/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'
import Heading from '../common/Heading';
import CoolFeatureImage from "@/assets/images/Services/CoolFeatureImage.png";
import CoolerFeatureImage from "@/assets/images/Services/CoolerFeatureImage.png";
import CoolestFeatureImage from "@/assets/images/Services/CoolestFeatureImage.png";
import Image from 'next/image';
import Link from 'next/link';
import ConnectCustomerOneImage from "@/assets/images/Services/ConnectCustomerOneImage.png";
import ConnectCustomerTwoImage from "@/assets/images/Services/ConnectCustomerTwoImage.png";
import CheckMarkIcon from "@/assets/images/Icons/CheckMarkIcon.png";
import FeatherIcon from "@/assets/images/Icons/FeatherIcon.svg";
import FeatherIconHover from "@/assets/images/Icons/FeatherHover.svg";
import EyeIcon from "@/assets/images/Icons/EyeIcon.svg";
import EyeIconHover from "@/assets/images/Icons/EyeIconHover.svg";
import SunIcon from "@/assets/images/Icons/SunIcon.svg";
import SunIconHover from "@/assets/images/Icons/SunIconHover.svg";
import { Button } from '../common/Button';
import { useHover } from '@/hooks/useHover';

const features = [
  {
    id: 1,
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
    exploreLink: "/",
    src: CoolFeatureImage
  },
  {
    id: 2,
    title: "Even cooler feature",
    description: "Learning curve network effects return on investment.",
    exploreLink: "/",
    src: CoolerFeatureImage
  }, {
    id: 3,
    title: "Coolest feature title",
    description: "Learning curve network effects return on investment.",
    exploreLink: "/",
    src: CoolestFeatureImage
  }
]

const connectCustomerOne = [
  {
    id: 1,
    title: "We connect our customers with the best."
  },
  {
    id: 2,
    title: "Advisor success customer launch party."
  },
  {
    id: 3,
    title: "Business-to-consumer long tail."
  }
]

const connectCustomerTwo = [
  {
    id: 1,
    title: "We connect our customers with the best.",
    src: FeatherIcon,
    srcHover: FeatherIconHover
  },
  {
    id: 2,
    title: "Advisor success customer launch party.",
    src: EyeIcon,
    srcHover: EyeIconHover
  },
  {
    id: 3,
    title: "Business-to-consumer long tail.",
    src: SunIcon,
    srcHover: SunIconHover
  }

]

const HoverListItem = ({ connect }: { connect: { srcHover: any; src: any, title: string } }) => {
  const { ref, isHovered } = useHover() as any

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 mb-8 cursor-pointer border border-[#f3f1f1]
        p-6 rounded-lg transition-all duration-300
        ${isHovered ? 'bg-[#0A2640] shadow-lg -translate-y-1' : 'shadow-md'}
      `}
    >
      <Image src={isHovered ? connect.srcHover : connect.src} alt='icon' />
      <p className={`${isHovered ? "text-white" : "text-[#000]"}  w-[80%] text-base`}>
        {connect.title}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <div className='container py-[4rem]'>
      <div className='lg:w-[70%] lg:ml-[15%] w-full ml-0'>
        <Heading text="Our Services" size='small' className='text-[#777777] text-center' />
        <Heading text="Handshake infographic mass market crowdfunding iteration." size='large' className='text-[#000] text-center' />
      </div>
      <div className='flex items-center justify-between mt-[5rem] lg:gap-[10rem] gap-[3rem] flex-col lg:flex-row'>
        {
          features.map((feature) => {
            return <div key={feature.id} className='w-full'>
              <Image src={feature.src} alt='feature image' className='w-full' />
              <div className='mt-[1rem]'>
                <Heading text={feature.title} size='small' className='text-[#000] mb-2 text-[20px]' />
                <p className='text-[#777777] w-[80%] text-base mb-2'>{feature.description}</p>
                <Link href={feature.exploreLink} className='text-[#000] text-center border-b pb-1 border-black'>Explore page &#8594;</Link>
              </div>
            </div>
          })
        }
      </div>

      {/* connect customer one */}
      <div className='flex items-center justify-between lg:gap-[7rem] gap-[5rem] mt-[10rem] flex-col lg:flex-row'>
        <div className='lg:basis-1/2 w-full'>
          <Image src={ConnectCustomerOneImage} alt="ConnectCustomerOneImage" className='w-full' />
        </div>
        <div className='flex-1'>
          <Heading text="We connect our customers with the best, and help them keep up-and stay open." size='medium' className='text-[#000] text-xl' />

          <div className='mt-[2rem]'>
            {
              connectCustomerOne.map((connect) => {
                return <div key={connect.id} className='flex items-center gap-5 mb-6'>
                  <Image src={CheckMarkIcon} alt="CheckMarkIcon" />
                  <p className='text-[#777777] w-[80%] text-base'>{connect.title}</p>
                </div>
              })
            }
          </div>
          <div className='mt-[2rem]'>
            <Button variant='outline' className='bg-[#0A2640] text-white px-8 hover:bg-[#0A2640]'>
              Start now
            </Button>
          </div>
        </div>
      </div>

      {/* connect customer two */}
      <div className='flex items-center justify-between lg:gap-[7rem] gap-[5rem] mt-[10rem] flex-col lg:flex-row'>
        <div className='lg:basis-1/2 w-full'>
          <Heading text="We connect our customers with the best, and help them keep up-and stay open." size='medium' className='text-[#000] text-xl' />
          <div className='mt-10'>
            {
              connectCustomerTwo.map((connect) => {
                return <HoverListItem
                  key={connect.id}
                  connect={connect}
                />
              })
            }
          </div>
        </div>
        <div className='lg:flex-1 w-full'>
          <Image src={ConnectCustomerTwoImage} alt="ConnectCustomerTwoImage" className='w-full' />
        </div>

      </div>

    </div>
  )
}

export default Services