import React from 'react'
import { InfiniteMovingCards } from '../thirdParty/InfiniteMovingCards';
import BoldoLogo from "@/assets/images/Partners/BoldoLogo.png"
import PrestoLogo from "@/assets/images/Partners/PrestoLogo.png"

const testimonials = [
  {
    src: BoldoLogo
  },
  {
    src: PrestoLogo
  },
  {
    src: BoldoLogo
  },
  {
    src: PrestoLogo
  },
  {
    src: BoldoLogo
  },
  {
    src: PrestoLogo
  },
  {
    src: BoldoLogo
  },
  {
    src: PrestoLogo
  },

];

const Partners = () => {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

export default Partners