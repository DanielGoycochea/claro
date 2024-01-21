import PropTypes from 'prop-types'
import styles from './timer.module.css'

export default function Timer({ missingTime, period }) {
  return (
    <div className={styles.timer}>
      <div className={styles['timer__number']}>
        {missingTime.length === 1 ? `0${missingTime}` : missingTime}
      </div>
      <div className={styles['timer__text']}>{period}</div>
    </div>
  )
}

Timer.propTypes = {
  missingTime: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
}
