"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import ResearchImage from "@/assets/images/Research.png"
import Heading from '../common/Heading'
import AccordionItem from '../common/Accordion';


const accordionData = [
  {
    id: '1',
    question: 'We connect our customers with the best?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
  },
  {
    id: '2',
    question: 'Android research & development rockstar?',
    answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
  }
];


const ResearchAndDevelopment = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className='container py-[8rem]'>
      <div className='w-full'>
        <Image src={ResearchImage} alt='ResearchImage' className='w-full' />
      </div>
      <div className='flex items-start justify-between mt-[3rem] gap-[2rem] flex-col lg:flex-row'>
        <div className='lg:basis-1/2 w-full'>
          <Heading text="We connect our customers with the best, and help them keep up-and stay open." size='medium' className='text-[#000] text-xl' />
        </div>
        <div className='lg:flex-1 w-full'>
          <div className="">
            {accordionData.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isExpanded={expandedId === item.id}
                onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchAndDevelopment