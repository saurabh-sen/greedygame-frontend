import Image from 'next/image'
import React from 'react'
import styles from './TopClients.module.css'
import cl1 from '../../public/Dream11-Logo-PNG-imsge@2x.png'
import cl2 from '../../public/MaskGroup64@2x.png'
import cl3 from '../../public/MaskGroup44@2x@2x.png'

const TopClients = () => {
  return (
    <div className={`${styles.topClients} bg-gray-100 `} >
      <div className="topClients__container lg:mt-14 pt-9 lg:w-[43%] flex items-start lg:ml-20 flex-col">
        <div className="topClients__container__title lg:text-[40px] text-3xl m-5 sm:m-0 font-bold text-left">Our Top Clients</div>
        <div className="topClients__container__images flex flex-wrap sm:gap-12 justify-center">
          <div className="topParterns__container__images__item w-[187px] h-[169px]">
              <Image src={cl1} alt="c1" className='w-[187px] h-[169px]' />
          </div>
          <div className="topParterns__container__images__item w-[187px] h-[169px]">
              <Image src={cl2} alt="cl2" className='w-[187px] h-[169px]' />
          </div>
          <div className="topParterns__container__images__item w-[187px] h-[169px]">
              <Image src={cl3} alt="cl3" className='w-[187px] h-[169px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopClients