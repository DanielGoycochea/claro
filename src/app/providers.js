'use client'

import VideoProvider from "./context/VideoProvider"

export function Providers({ children }) {
  return (
    <VideoProvider>
      {children}
    </VideoProvider>
  )
}