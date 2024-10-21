import React from 'react'
import './Window.css'
import '../Card/Card.css'

export default function Window({active, setActive, elem}) {
  return (
    <div className={active ? 'modal active': 'modal'} onClick={()=> setActive(false)}>
        <div className={active ? 'modal_content active': 'modal_content'} onClick={e => e.stopPropagation()}>
         <img className='cardImg' src={elem.img} alt='img'></img>
        </div>
    </div>
  )


}
