
import { motion } from 'framer-motion';
import type { Testimonial } from '@/types/testimonial';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <p className="text-xl text-gray-800 mb-8 flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          {testimonial.image && (
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <h4 className="font-medium text-gray-900">
            {testimonial.author}
          </h4>
          <p className="text-gray-600">
            {testimonial.position} @ {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};