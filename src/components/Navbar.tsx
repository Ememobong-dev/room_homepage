import React from 'react';
import brandLogo from "../../public/images/logo.svg"
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-full z-50 fixed bg-transparent top-0'>
        <div className='py-10 px-10 flex items-center gap-16 text-white'>
            <span className='brand-logo'>
                <Image src={brandLogo} alt="logo" />
            </span>

            <div className='flex gap-8 items-center'>
                <span>
                    <p>home</p>
                </span>
                <span>
                    <p>shop</p>
                </span>
                <span>
                    <p>about</p>
                </span>
                <span>
                    <p>contact</p>
                </span>

            </div>

        </div>
        
    </div>
  )
}

export default Navbar