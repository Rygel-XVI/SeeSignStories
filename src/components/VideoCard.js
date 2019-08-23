import React from 'react'
import YouTube from 'react-youtube';

const VideoCard = ({ id, tags,title, opts }) => (
  <div className="video-card">
    <YouTube videoId={id} key={id} fullscreen={true}/>
  </div>
)

export default VideoCard
