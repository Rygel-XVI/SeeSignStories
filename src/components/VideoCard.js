import React from 'react'
import YouTube from 'react-youtube';

const VideoCard = ({ id, videoId }) => (
  <div className="video-card">
    <YouTube videoId={videoId} key={videoId} id={videoId}/>
  </div>
)

export default VideoCard
