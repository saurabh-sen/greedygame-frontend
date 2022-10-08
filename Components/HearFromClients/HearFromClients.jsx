import Image from 'next/image'
import React from 'react'
import cli1 from '../../public/Dream-11-Logo-PNG_aeod57@2x.png'
import styles from './HearFromClients.module.css'

const HearFromClients = () => {
  return (
    <div className={styles.hearFromClients}>
      <div className="hearFromClients__container lg:mt-14 pt-9 lg:w-1/2 flex items-start lg:ml-20 flex-col">
        <div className="hearFromClients__container__title">
          <p className='sm:text-4xl text-3xl font-bold text-left'>Hear it from Clients</p>
        </div>
        <div className="hearFromClients__container__content sm:mt-8 sm:mb-8 sm:w-[620px] bg-white rounded-xl shadow-2xl shadow-[#41414115] p-10 mt-8 mr-6">
          <div className="hearFromClients__container__content__title w-[117px] h-[32px]">

          <Image src={cli1} alt="clients" className='w-[117px] h-[32px]'  />
          </div>
          <p className="hearFromClients__container__content__title font-bold text-xl text-left">22.4 Mn minutes of branding results in 25k high-quality registrations</p>
          <p className="hearFromClients__container__content__description text-base text-left text-[#435366] pt-[1rem] pb-[2rem]">The placement of clickable units natively placed on the main menu, gameplay screen and pause screen ensured high engagement, registrations and transactions.</p>
          <p className="hearFromClients__container__content__readMore text-[19px] text-[#126FED] font-semibold text-left">Read Casestudy</p>
        </div>
      </div>
    </div>
  )
}

export default HearFromClients