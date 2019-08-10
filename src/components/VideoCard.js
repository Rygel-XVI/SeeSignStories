import React from 'react'
import YouTube from 'react-youtube';

const VideoCard = ({ id, videoId }) => (
  <div className="video-card">
    <YouTube videoId={videoId} key={videoId} />
  </div>
)

export default VideoCard
