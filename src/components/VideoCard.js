import React from 'react'
import YouTube from 'react-youtube';

const VideoCard = ({ id, tags,title, opts, onPlayVideo }) => (

  <div className="video-card">
    <YouTube videoId={id} key={id} onPlay={onPlayVideo}/>
  </div>
)

export default VideoCard
