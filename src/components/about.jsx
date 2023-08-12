import React from 'react'
import image1 from "../images/sp.jpg"
const about = () => {
  return (
    <div className='p-3' id='about'> 
      <h1>What We Do ?</h1>
    <p>We provide different Services like Plumbing, Painting and Electrition etc. From here our clients can book our any service.</p>
   <img src={image1}   height={300} w={300} alt=''/>
    </div>
  )
}

export default about
