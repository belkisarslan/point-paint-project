import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setDarkMode } from './themeSlice'
import  '../../index.css'


export function Theme() {
  const dark = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  console.log(dark)
  return (
    <div>
      <div>
        <button className="theme-btn" onClick={() => dispatch(setDarkMode())}>
        <span className="material-symbols-outlined">
         light_mode
        </span>
        </button>
      </div>
    </div>
  )
}