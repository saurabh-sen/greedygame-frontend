import Image from 'next/image'
import React from 'react'
import c1 from '../../public/MaskGroup41@2x.png'
import c2 from '../../public/MaskGroup43@2x.png'
import c3 from '../../public/MaskGroup44@2x.png'
import c4 from '../../public/MaskGroup42@2x.png'
import c5 from '../../public/MaskGroup34@2x.png'
import c6 from '../../public/MaskGroup39@2x.png'

const TopPartners = () => {
  return (
    <div className='bg-white '>
      <div className="topParterns__container lg:mt-14 mt-9 lg:w-[43%] flex items-start lg:ml-20 flex-col">
        <div className="topParterns__container__title lg:text-[40px] text-3xl m-5 sm:m-0 font-bold text-left">Our Top Partners</div>
        <div className="topParterns__container__images flex flex-wrap sm:gap-12 justify-center">
          
          <div className="topParterns__container__images__item w-[187px] h-[169px]">
            <Image src={c1} alt="c1" className='w-[187px] h-[169px]' />
          </div>
          
          <div className="topParterns__container__images__item w-[187px] h-[169px]">
            <Image src={c2} alt="c2" className='w-[187px] h-[169px]' />
          </div>
          
          <div className="topParterns__container__images__item w-[187px] h-[169px]">
            <Image src={c3} alt="c3" className='w-[187px] h-[169px]' />
          </div>
          
          <div className="topParterns__container__images__item w-[187px] h-[169px]">
            <Image src={c4} alt="c4" className='w-[187px] h-[169px]' />
          </div>
          
          <div className="topParterns__container__images__item w-[187px] h-[169px]">
            <Image src={c5} alt="c5" className='w-[187px] h-[169px]' />
          </div>
          
          <div className="topParterns__container__images__item w-[187px] h-[169px]">
            <Image src={c6} alt="c6" className='w-[187px] h-[169px]' />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default TopPartners