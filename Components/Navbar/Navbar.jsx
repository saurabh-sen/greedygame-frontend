import React from 'react'
import Image from 'next/image'
import logo from '../../public/Group7463@2x.png'

const Navbar = () => {

    return (
        <nav className='navbar h-[80px] bg-white flex sticky top-0 w-full bg-opacity-50 z-[1] ' style={{
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
        }}>
            <div className='navbar__menu w-max sm:hidden m-0 pt-8 pl-5 '>
                <svg width="21px" height="17px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill='black' d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </div>
            <div className="navbar__logo h-[15px] w-[117px] sm:w-[194px] sm:h-[25px] ml-5 mt-7 sm:ml-[60px] sm:mt-7  ">
                <Image src={logo} className='' alt="logo" />
            </div>
        </nav>
    )
}

export default Navbar