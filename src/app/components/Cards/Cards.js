'use client'

import Image from 'next/image'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { VideoContext } from '../../context/VideoProvider'
import styles from './cards.module.css'

export default function Cards({ src, title, data }) {
  const { video, setVideo } = useContext(VideoContext)

  const handleShowVideo = (data) => {
    setVideo(data)
  }
  return data.url !== video.url ? (
    <div onClick={() => handleShowVideo(data)}>
      <Image
        className={styles['card__image']}
        src={src}
        width={200}
        height={200}
        alt="Noticias"
      />

      <p className={styles['card__title']}>{title}</p>
    </div>
  ) : (
    <div className={styles['card__disabled']}>
      <p>Los Deportistas latinoamericanos que participan en Sochi 2014.</p>
    </div>
  )
}

Cards.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}
