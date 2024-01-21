'use client'

import { useContext } from 'react'
import { VideoContext } from '../../context/VideoProvider'
import styles from './video.module.css'

export default function Video() {
  const { video } = useContext(VideoContext)

  return (
    <div className={styles.video}>
      <iframe
        width="637"
        height="350"
        src={video.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}
