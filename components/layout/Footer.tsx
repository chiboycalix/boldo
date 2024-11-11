import React from 'react'
import LogoBlack from "@/assets/images/Logos/LogoBlack.png";
import Image from 'next/image';
import { Button } from '../common/Button';

const footerLinks = [
  {
    id: 1,
    title: 'Landings',
    children: [
      {
        id: 1,
        title: 'Home',
        url: '/'
      },
      {
        id: 2,
        title: 'Products',
        url: '/products'
      },
      {
        id: 3,
        title: 'Services',
        url: '/services'
      }
    ]
  },
  {
    id: 2,
    title: 'Company',
    children: [
      {
        id: 1,
        title: 'Home',
        url: '/'
      },
      {
        id: 2,
        title: 'Careers',
        url: '/careers'
      },
      {
        id: 3,
        title: 'Services',
        url: '/services'
      }
    ]
  },
  {
    id: 3,
    title: 'Resources',
    children: [
      {
        id: 1,
        title: 'Blog',
        url: '/blog'
      },
      {
        id: 2,
        title: 'Products',
        url: '/products'
      },
      {
        id: 3,
        title: 'Services',
        url: '/services'
      }
    ]
  }
]
const Footer = () => {
  return (
    <div className='py-[1rem]'>
      <div className='container'>
        <div className='flex items-start justify-between gap-[2rem] lg:flex-row flex-col'>
          <div className='lg:basis-[50%] w-full'>
            <Image src={LogoBlack} alt="LogoBlack" className='w-[7rem]' />
            <div className='lg:w-[50%] mt-8 w-full'>
              <p className='leading-[30px] text-[#777777]'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
            </div>
          </div>
          <div className='lg:flex-1 w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            {
              footerLinks.map((link) => {
                return (
                  <div key={link.id} className='w-full'>
                    <h3 className='mb-6 font-bold'>{link.title}</h3>
                    <ul className='w-full'>
                      {
                        link.children.map((child) => {
                          return (
                            <li key={child.id} className='mb-5 text-[#777777]'>
                              <a href={child.url}>{child.title} {child.url === "/careers" && <Button className='text-[#0A2640] font-bold py-1 px-3 text-sm'>Hiring!</Button>} </a>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className='lg:mt-[0rem] mt-[2rem]'>
          <p className='text-[#777777]'>
            All rights reserved.
          </p>
        </div>
      </div >
    </div >
  )
}

export default Footer