import React from 'react'
import styles from "./Statistics.module.css"


const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <div className="statistics__container lg:ml-20 lg:w-[43%] text-white flex flex-row flex-wrap items-center justify-around h-full ">
        <div className="statistics__container__item flex flex-col items-center">
          <div className="statistics__container__item__number font-bold text-5xl">300+</div>
          <div className="statistics__container__item__text font-semibold text-xl ">Affiliates</div>
        </div>
        <div className="statistics__container__item flex flex-col items-center">
          <div className="statistics__container__item__number  font-bold text-5xl">5K+</div>
          <div className="statistics__container__item__text font-semibold text-xl ">Apps Inventory</div>
        </div>
        <div className="statistics__container__item flex flex-col items-center">
          <div className="statistics__container__item__number  font-bold text-5xl">1M+</div>
          <div className="statistics__container__item__text font-semibold text-xl ">App Installs</div>
        </div>
        <div className="statistics__container__item flex flex-col items-center">
          <div className="statistics__container__item__number  font-bold text-5xl">3K+</div>
          <div className="statistics__container__item__text font-semibold text-xl ">Active Campaigns</div>
        </div>
      </div>
    </div>
  )
}

export default Statistics