import React from 'react'
import asl_read from '../ASL_Read.jpg'

const Banner = ({props}) => (
  <div className="banner">
  <img className="logo-img" src={asl_read} alt="ASL sign for read"/>
  <div className="banner-text">
    <h1>See Sign Stories</h1>
  </ div>
  <br />
  </div>
)

export default Banner
