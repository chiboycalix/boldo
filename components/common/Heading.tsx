import { cn } from '@/lib/utils';
import React from 'react'

type HeadingProps = {
  text: React.ReactNode;
  size: "large" | "medium" | "small";
  className?: string;
}

const Heading = ({ text, size, className }: HeadingProps) => {
  const large = size === "large" && `4xl:text-5xl 4xl:leading-4xl 
                                     3xl:text-4xl 3xl:leading-3xl  
                                     2xl:text-2xl 2xl:leading-2xl
                                     xl:text-xl xl:leading-xl
                                     text-lg leading-lg`;
  const medium = size === "medium" && `3xl:text-4xl 3xl:leading-3xl  
                                       2xl:text-2xl 2xl:leading-2xl
                                       xl:text-xl xl:leading-xl
                                       text-lg leading-lg`;
  const small = size === "small" && `text-md leading-md`;

  return (
    <p className={cn(`font-manrope`, large, medium, small, className)}>
      {text}
    </p>
  )
}

export default Heading