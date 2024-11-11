import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-full font-medium transition-all duration-200'

  const variants = {
    primary: 'bg-[#65E4A3] text-navy-900 hover:bg-mint-400',
    outline: 'border-2 border-white text-white hover:bg-white/10'
  }

  const buttonStyles = `${baseStyles} ${variants[variant]} font-black ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonStyles}
    >
      {children}
    </button>
  )
}