import React from 'react'
import './VideoPlaybackStyle.css'
import { FaTimes } from 'react-icons/fa'

const VideoPlayback = ({ trailer, setShowTrailer }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setShowTrailer(false)}><FaTimes /></span>
          <div className="trailer">
            <iframe
            width="100%"
            height="100%"
              src={trailer}
              title="movie trailer"
            />
        </div>
      </div>
    </div>
  )
}

export default VideoPlayback