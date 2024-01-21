export const calculateTimeLeft = () => {
  const milliSecondsInSeconds = 1000
  const secondsInMinute = 60
  const minutesInHour = 60
  const hoursInDay = 24
  const today = Date.now()
  const olympicsDate = new Date('2024-12-01T00:00:00Z').getTime()

  if (olympicsDate <= today) {
    throw new Error('Olympics date must be in the future')
  }

  const timeDifference = olympicsDate - today

  if (timeDifference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(
    timeDifference /
      (milliSecondsInSeconds * secondsInMinute * minutesInHour * hoursInDay)
  )
  const hours = Math.floor(
    (timeDifference %
      (milliSecondsInSeconds * secondsInMinute * minutesInHour * hoursInDay)) /
      (milliSecondsInSeconds * secondsInMinute * minutesInHour)
  )
  const minutes = Math.floor(
    (timeDifference %
      (milliSecondsInSeconds * secondsInMinute * minutesInHour)) /
      (milliSecondsInSeconds * secondsInMinute)
  )
  const seconds = Math.floor(
    (timeDifference % (milliSecondsInSeconds * secondsInMinute)) /
      milliSecondsInSeconds
  )

  return { days, hours, minutes, seconds }
}
