import React from 'react'

type InputProps = {
  placeholder: string;
  className?: string
}
const Input = ({ placeholder, className }: InputProps) => {
  const baseStyles = 'px-6 py-2 rounded-full font-medium transition-all duration-200'
  const inputStyles = `${baseStyles} ${className}`
  return (
    <input className={inputStyles} placeholder={placeholder} />
  )
}

export default Input