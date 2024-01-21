import { useState, createContext } from 'react'
import PropTypes from 'prop-types';

export const VideoContext = createContext()

const VideoProvider = ({ children }) => {
  const [video, setVideo] = useState({})

  return (
    <VideoContext.Provider value={{ video, setVideo }}>
      {children}
    </VideoContext.Provider>
  )
}

export default VideoProvider

VideoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}