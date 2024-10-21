import React from 'react'
import './Card.css'

export default function Card({elem}) {
  return (
     <div className='service_img'>
        <img className='cardImg' src={elem.img} alt='img'></img>
     </div>
  )
}
