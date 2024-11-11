"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Albus from "@/assets/images/Testimonials/Albus.png"
import Severus from "@/assets/images/Testimonials/Severus.png"
import Harry from "@/assets/images/Testimonials/Harry.png"

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  authorPhoto: any;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Buyer buzz partner network disruptive non-disclosure agreement business",
    author: "Albus Dumbledore",
    authorPhoto: Albus,
    position: "Manager",
    company: "Howarts"
  },
  {
    id: 2,
    quote: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
    author: "Severus Snape",
    position: "Manager",
    authorPhoto: Severus,
    company: "Slytherin"
  },
  {
    id: 3,
    quote: "Release facebook responsive web design business model canvas seed money monetization.",
    author: "Harry Potter",
    position: "Team Leader",
    authorPhoto: Harry,
    company: "Gryffindor"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#0A2640] py-20">
      <div className="container">
        <div className='flex items-center justify-center mb-12 sm:flex-row flex-col'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg lg:text-xl text-white lg:basis-[50%] basis-[80%]"
          >
            An enterprise template to ramp up your company website
          </motion.h2>

          <div className="flex gap-4 justify-end mt-8 flex-1">
            <button
              onClick={handlePrev}
              className="p-2 bg-white rounded-full hover:bg-mint-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white rounded-full hover:bg-mint-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex items-start justify-between gap-8"
              >
                {[0, 1, 2].map((offset) => {
                  const index = (currentIndex + offset) % testimonials.length;
                  const testimonial = testimonials[index];

                  return (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                      <p className="lg:text-lg text-md text-gray-800 mb-8">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex lg:items-center items-start gap-4 sm:flex-row flex-col">
                        <Image src={testimonial.authorPhoto} alt="author Image" className='w-12 h-12 rounded-full' />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {testimonial.author}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {testimonial.position} @ {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;