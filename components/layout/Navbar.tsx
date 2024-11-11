"use client"
import Image from 'next/image'
import LogoImage from "@/assets/images/Logos/Logo.svg"
import Link from "next/link";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
  {
    id: 1,
    name: "Product",
    path: "/product"
  },
  {
    id: 2,
    name: "Services",
    path: "/services"
  },
  {
    id: 3,
    name: "About",
    path: "/about"
  }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <div className='flex items-center justify-between'>
        <Image src={LogoImage} alt="LogoImage" />
        {/* desktop */}
        <ul className="text-white items-center gap-[2rem] hidden lg:flex lg:items-center lg:space-x-4">
          {
            navigationLinks.map((navigationLink) => {
              return <li key={navigationLink.id} className="text-base font-open-sans">
                <Link href={navigationLink.path}>{navigationLink.name}</Link>
              </li>
            })
          }

          <li className="bg-white px-8 py-2 rounded-full font-open-sans text-base font-bold">
            <Link href="/" className="text-black">Log In</Link>
          </li>
        </ul>
        {/* mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="pt-[2rem] pb-3 space-y-1">
            {navigationLinks.map((item) => {
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-2 text-base font-medium text-white`}>
                  {item.name}
                </Link>
              );
            })}
            <div className="bg-white px-8 py-2 rounded-full font-open-sans text-base font-bold">
              <Link href="/" className="text-black">Log In</Link>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Navbar