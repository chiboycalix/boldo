
import React from 'react'
import Heading from '../common/Heading';
import BlogOne from "@/assets/images/Blogs/BlogOne.png"
import BlogTwo from "@/assets/images/Blogs/BlogTwo.png"
import BlogThree from "@/assets/images/Blogs/BlogThree.png"
import BlogOneAuthor from "@/assets/images/Blogs/BlogOneAuthor.png"
import BlogTwoAuthor from "@/assets/images/Blogs/BlogTwoAuthor.png"
import BlogThreeAuthor from "@/assets/images/Blogs/BlogThreeAuthor.png"
import Image from 'next/image';
import { Button } from '../common/Button';

const blogs = [
  {
    id: 1,
    category: "November 22, 2021",
    description: "Pitch termsheet backing validation focus release.",
    blogPhoto: BlogOne,
    author: {
      name: "Chandler Bing",
      profilePhoto: BlogOneAuthor
    }
  },
  {
    id: 2,
    category: "November 22, 2021",
    description: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    blogPhoto: BlogTwo,
    author: {
      name: "Rachel Green",
      profilePhoto: BlogTwoAuthor
    }
  },
  {
    id: 3,
    category: "November 22, 2021",
    description: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    blogPhoto: BlogThree,
    author: {
      name: "Monica Geller",
      profilePhoto: BlogThreeAuthor
    }
  }
]

const OurBlog = () => {
  return (
    <div className='container py-[4rem]'>
      <div className='lg:w-[70%] lg:ml-[15%] w-full ml-0'>
        <Heading text="Our Blog" size='small' className='text-[#777777] text-center' />
        <Heading text="Value proposition accelerator product management venture" size='large' className='text-[#000] text-center font-normal' />
      </div>

      <div className='flex items-start justify-between gap-10 mt-[5rem] flex-col lg:flex-row'>
        {
          blogs.map((blog) => {
            return <div key={blog.id} className='flex flex-col justify-between'>
              <Image src={blog.blogPhoto} alt='blog photo' className='' />
              <div className='flex items-center 2xs:gap-10 gap-2 mt-5 2xs:flex-row flex-col'>
                <p className='font-bold'>Category</p>
                <p className='text-[#777777]'>{blog.category}</p>
              </div>
              <div className='lg:mt-5 mt-[1rem]'>
                <p>{blog.description}</p>
              </div>
              <div className="flex gap-5 items-center lg:mt-5 mt-[1rem]">
                <Image src={blog.author.profilePhoto} alt="author photo" className='w-8 h-8' />
                <p>{blog.author.name}</p>
              </div>
            </div>
          })
        }
      </div>
      <div className='mt-[5rem] flex justify-center'>
        <Button className='text-black bg-white border-2 border-[#0A2640]' variant='primary'>
          Load more
        </Button>
      </div>
    </div>
  )
}

export default OurBlog