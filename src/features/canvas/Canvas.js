import React, { useState } from 'react'
import  '../../index.css'



export function Canvas() {
  const types = [
    {
      color:'black',
      text: 'black'
    },
    {
      color:'orange',
      text: 'orange'
    },
    {
      color:'blue',
      text: 'blue'
    },
    {
      color:'pink',
      text: 'pink'
    },
    {
      color:'green',
      text: 'green'
    },
    {
      color:'yellow',
      text: 'yellow'
    },
 ]
 const [color, setColor] = useState(types[0].color)
 const [points, setPoints] = useState([])
 const clickHandle = e =>{
    setPoints(points => [...points,{
      x: e.clientX,
      y: e.clientY
  }])
}
  
  const changeColor = (e) => {
    setColor(e.target.value)
  }
  console.log(color)
  return (
    <div>
      <div className='canvas' onClick={clickHandle}>
        {points.map((point,key) => (
            <div className='point' key={key} style={{'--color':color, left: point.x, top:point.y}}></div>
        ))}
      </div>
      <select style={{'--color':color}} onChange={changeColor}>
        {types.map((type, key) => (
          <option style={{'--color':color}} key={key} value={type.color}>{type.text}</option>
        ))}
      </select>
    </div>
  )
}