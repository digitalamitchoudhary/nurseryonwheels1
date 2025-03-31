import React from 'react'
import { Link } from 'react-router-dom'

function BannerBox(props) {
  return (
    <>
        <div className="box bannerBox overflow-hidden rounded-lg group">
            <Link to={props.Link} >
                  <img src={props.img} alt="banner" className="!transition-all group-hover:scale-105  group-hover:rotate-1 w-full"/>
                  </Link>
                </div>
                
    </>
  )
}

export default BannerBox
