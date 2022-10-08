import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white'>
      <p className="footer__text font-semibold text-xl text-[#1D1A1A] lg:ml-20 m-5 h-24 sm:h-auto">
        ©2022 GreedyGame, Inc. All rights reserved.
      </p>
      <div className="footer__content flex flex-row justify-evenly sm:hidden fixed bottom-0 bg-white w-full m-0 p-[1rem] items-center ">
        <p className="footer__content__text font-semibold text-base text-[#1D1A1A]">Get a Call back from us</p>
        <Link href='/#contact' scroll={true}>
          <button className="footer__content__button bg-[#126FED] rounded-md w-40 h-11 text-white">Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default Footer