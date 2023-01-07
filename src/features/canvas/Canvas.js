import React, { useState } from 'react'
import  '../../index.css'


export function Canvas() {
    const [points, setPoints] = useState([])
    const clickHandle = e =>{
     setPoints(points => [...points,{
        x: e.clientX,
        y: e.clientY
     }])
    }
  
  return (
    <div>
      <div className='canvas' onClick={clickHandle}>
        {points.map((point,key) => (
            <div key={key} className='point' style={{left: point.x, top:point.y}}></div>
        ))}
      </div>
    </div>
  )
}