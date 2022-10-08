import Image from 'next/image'
import React from 'react'
import line from '../../public/Group2439@2x.png'

const Info = () => {
  return (
    <div className='bg-[#1A1A1A] '>
      <div className='info__container lg:w-[43%] pt-20 pr-5 pb-20 pl-5 lg:ml-20'>
        <div className='info__container__content font-bold text-4xl text-white flex flex-wrap gap-3'>
          <p className="info__container__content__title1">Acquire </p>
          <div className="info__container__content__title2">
            <p className="info__container__content__title2__text"> quality users, </p>
            <div className="info__container__content__title2__image w-[200px] h-3" style={{
              lineHeight: '0px'
            }}>
              <Image src={line} alt="line" className='w-[200px] h-3' />
            </div>
          </div>
          <p className="info__container__content__title3">not just installs</p>
        </div>
        <p className="info__container__text text-xl text-[#AAAEB2] text-left pt-3">Talk to us today and start creating mobile marketing campaigns that deliver results.</p>
      </div>
    </div>
  )
}

export default Info