'use client'

import React, { useEffect, useState } from 'react'
import Timer from '../Timer/Timer'
import styles from './countdown.module.css'
import { calculateTimeLeft } from '../../dist/utils'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(intervalId)
  })

  return (
    <>
      <h2 className={styles['countdown__title']}>FALTAN</h2>
      <div className={styles.countdown}>
        <Timer missingTime={`${timeLeft.days}`} period='DÍAS' />
        <Timer missingTime={`${timeLeft.hours}`} period='HRS' /> 
        <Timer missingTime={`${timeLeft.minutes}`}  period='MIN.'/> 
        <Timer missingTime={`${timeLeft.seconds}`} period= 'SEG'/> 
      </div>
    </>
  )
}
