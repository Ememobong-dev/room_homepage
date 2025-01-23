import React, { useState } from 'react';
import brandLogo from "../../public/images/logo.svg";
import hamburger from "../../public/images/icon-hamburger.svg";
import closeIcon from "../../public/images/icon-close.svg";
import Image from 'next/image';

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)

    const handleHamburger = () => {
        setShowMobileNav(true)

    }

  return (
    <div className='w-full z-50 fixed bg-transparent top-0'>
        <div className='p-10  items-center gap-16 text-white hidden md:flex'>
            <span className='brand-logo'>
                <Image src={brandLogo} alt="logo" />
            </span>

            <div className='flex gap-8 items-center font-leagueSpartanReg'>
                <span className='hover:border-b-2 cursor-pointer hover:font-bold hover:border-white'>
                    <p>home</p>
                </span>
                <span className='hover:border-b-2 cursor-pointer hover:font-bold hover:border-white'>
                    <p>shop</p>
                </span>
                <span className='hover:border-b-2 cursor-pointer hover:font-bold hover:border-white'>
                    <p>about</p>
                </span>
                <span className='hover:border-b-2 cursor-pointer hover:font-bold hover:border-white'>
                    <p>contact</p>
                </span>
            </div>
        </div>
        <div className={`md:hidden p-10 ${showMobileNav ? "bg-white" : "bg-transparent"} `}> 
            {
                !showMobileNav ? (
                    <div className='flex items-center gap-28'>
                        <span onClick={handleHamburger}>
                         <Image src={hamburger} alt="logo" />
                        </span>
                        <span className='brand-logo'>
                            <Image src={brandLogo} alt="logo" />
                        </span>
                    </div>
                ) : (
                    <div className='flex items-center gap-16 text-black '>
                        <span className='closeIcon cursor-pointer' onClick={() => setShowMobileNav(false) }>
                            <Image src={closeIcon} alt="close icon" />
                        </span>

                        <div className='flex gap-8 items-center font-leagueSpartanBold'>
                            <span className='hover:border-b-2 cursor-pointer hover:font-bold hover:border-black'>
                                <p>home</p>
                            </span>
                            <span className='hover:border-b-2 cursor-pointer hover:font-bold hover:border-black'>
                                <p>shop</p>
                            </span>
                            <span className='hover:border-b-2 cursor-pointer hover:font-bold hover:border-black'>
                                <p>about</p>
                            </span>
                            <span className='hover:border-b-2 cursor-pointer hover:font-bold hover:border-black'>
                                <p>contact</p>
                            </span>
                        </div>
                    </div>

                )
            }
           
        </div>
        
    </div>
  )
}

export default Navbar