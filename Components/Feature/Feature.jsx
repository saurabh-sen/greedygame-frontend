import Image from 'next/image'
import { React, useState } from 'react'
import styles from './Feature.module.css'
import textBg from '../../public/Group2444@2x.png'
import cardBg1 from '../../public/Group7436@2x.png'
import cardBg2 from '../../public/Group7330@2x.png'
import cardBg3 from '../../public/Group7482@2x.png'
import cardBg4 from '../../public/cardBg@2x.png'

const Feature = () => {

  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailValid(false);
    }

    if(phone.length !== 13 && !/^([+]\d{2})? \d{10}$/.test(phone)) {
      setPhoneValid(false);
    }
  };

  return (
    <div className='bg-[rgb(242 242 242)] ' >
      <div className={styles.feature} >
        <div className="feature__left sm:w-[700px] sm:mr-11 sm:ml-16 sm:mb-20 mt-3 font-bold6">
          <div className="feature__left__title sm:text-[57px] text-[40px] mt-0 sm:mr-5 mb-6 ml-5"
            style={{
              textAlign: "left",
              font: "Lato",
              letterSpacing: "0px",
              color: "#28334E",
            }}>
            <div className="feature__left__first__title">
              <div className="feature__left__first__title__image__div sm:w-[414px] w-[294px]">
                <p className='feature__left__first__title__p font-bold '
                  style={{
                    lineHeight: "0",
                  }}
                >
                  Result-oriented
                </p>
                <Image src={textBg} alt="textbg" className='sm:w-[414px] sm:h-[21px] w-[294px] h-[10px]' />
              </div>
            </div>
            <div className="feature__left__secondary__title">
              performance campaigns for every objective
            </div>
          </div>
          <div className="feature__left__cards flex flex-wrap items-center justify-center gap-5 ">

            <div className="sm:w-[336px] sm:h-[176px] w-[300px] h-[126px] bg-white rounded-xl flex items-center justify-center flex-col " >
              <div className="feature__left__card__image w-16 ">
                <Image src={cardBg1} alt="textbg" className=' h-[42px]' />
              </div>
              <p className='w-[224px]' >Self-serve platform with CPI starting at INR 1</p>
            </div>

            <div className="sm:w-[336px] sm:h-[176px] w-[300px] h-[126px] bg-white rounded-xl flex items-center justify-center flex-col " >
              <div className="feature__left__card__image w-16 ">
                <Image src={cardBg2} alt="textbg" className=' h-[42px]' />
              </div>
              <p className='w-[224px]' >Access to premium inventory and exposure to 5K+ apps</p>
            </div>

            <div className="sm:w-[336px] sm:h-[176px] w-[300px] h-[126px] bg-white rounded-xl flex items-center justify-center flex-col " >
              <div className="feature__left__card__image w-16 ">
                <Image src={cardBg3} alt="textbg" className=' h-[42px]' />
              </div>
              <p className='w-[224px]' >Comprehensive reporting and insights into campaign performance</p>
            </div>

            <div className="sm:w-[336px] sm:h-[176px] w-[300px] h-[126px] bg-white rounded-xl flex items-center justify-center flex-col " >
              <div className="feature__left__card__image w-16 ">
                <Image src={cardBg4} alt="textbg" className=' h-[42px]' />
              </div>
              <p className='w-[224px]' >Campaigns for every need - clicks, installs, impressions, and more</p>
            </div>

          </div>

        </div>
        <div id="contact" className="feature__right sm:w-[597px] w-[300px] sm:h-[558px] bg-white rounded-xl shadow-2xl shadow-[#C7C7C75F] mt-5 lg:mb-48 xl:fixed xl:right-[3%] static m-auto text-base mb-16">
          <div className="feature__right__div w-[80%] mt-8 m-auto">
            <div className="feature__right__name__email flex flex-wrap">
              <div className="feature__right__name flex flex-col">
                <label className='mb-3 mt-3 font-bold' htmlFor="name">Name</label>
                <input className='bg-[#F9FAFE] rounded sm:mr-8 p-[0.6rem] focus:outline-none sm:w-auto w-[120%] ' placeholder='Enter your Full Name' type="name" name="name" />
              </div>
              <div className="feature__right__email flex flex-col">
                <label className='mb-3 mt-3 font-bold' htmlFor="email">Email</label>
                <input className={`bg-[#F9FAFE] rounded sm:mr-8 p-[0.6rem] focus:outline-none sm:w-auto w-[120%] ${ !emailValid ? 'border border-red-300' : '' } `} placeholder='Enter your Email Address' type="email" name="email" onChange={(e) => {setEmail(e.target.value), setEmailValid(true)}} />
                { !emailValid ? <label className='mb-3 mt-3 text-sm text-[#EB1414]' htmlFor="email">Invalid Email Address</label> : null }
              </div>
            </div>
            <div className="feature__right__phone flex flex-col">
              <label className='mb-3 mt-3 font-bold' htmlFor="phone">Phone Number</label>
              <input className={`bg-[#F9FAFE] rounded sm:mr-8 p-[0.6rem] focus:outline-none ${ !phoneValid ? 'border border-red-300' : ''} `} placeholder='Enter your phone number with country code' type="tel" name="phone" onChange={(e) => {setPhone(e.target.value), setPhoneValid(true)}}  />
              { !phoneValid ? <label className='mb-3 mt-3 text-sm text-[#EB1414]' htmlFor="phone">Please enter a Valid phone number with country code</label> : null }
            </div>
            <div className="feature__right__website__link flex flex-col">
              <label className='mb-3 mt-3 font-bold' htmlFor="web">App/Website Link (optional)</label>
              <input className='bg-[#F9FAFE] rounded sm:mr-8 p-[0.6rem] focus:outline-none ' placeholder='Enter you App/Website you wish to monetise' type="url" name="web" />
            </div>
            <div className="feature__right__monthly__revenue flex flex-col">
              <label className='mb-3 mt-3 font-bold' htmlFor="revenue">Monthly Revenue (USD)</label>
              <input className='bg-[#F9FAFE] rounded sm:mr-8 p-[0.6rem] focus:outline-none ' placeholder='Enter your Average monthly revenue in USD' type="number" name="revenue" />
            </div>
            <div className="feature__right__button">
              <button type="submit" className='w-full mt-7 mb-4 p-2 text-white font-bold rounded-md bg-[#126FED] hover:bg-[#3481ee]' onClick={handleSubmit} >Get Started</button>
            </div>
            <div className="feature__right__text mb-12">
              <p>By signing up, you agree to our <span className='text-[#126FED] font-bold'>Terms</span> and <span className='text-[#126FED] font-bold'>Privacy Policy</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature