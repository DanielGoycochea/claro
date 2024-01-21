import Countdown from '../Countdown/Countdown'
import Video from '../Video/Video'
import backgroundImage from '../../../../public/img/background.jpg'
import styles from './hero.module.css'

export default function Hero() {
  return (
    <section
      className={styles['hero__background']}
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className={styles.hero}>
        <Countdown />
        <Video />
      </div>
    </section>
  )
}
