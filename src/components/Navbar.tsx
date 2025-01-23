import React from 'react';
import brandLogo from "../../public/images/logo.svg"
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-full z-50 bg-transparent'>
        <div className='py-4 px-10 flex items-center gap-8 text-white'>
            <span className='brand-logo'>
                <Image src={brandLogo} alt="logo" />
            </span>

            <div className='flex gap-3 items-center'>
                <span>
                    <p>home</p>
                </span>
                <span>
                    <p>home</p>
                </span>
                <span>
                    <p>home</p>
                </span>

            </div>

        </div>
        
    </div>
  )
}

export default Navbar