import React, { FC } from 'react'
import s from '../styles/slider.module.css'

type SliderProps ={
    name:string,
    num:number,
}
const Slider : FC<SliderProps> = ({name,num}) => {
  return (
    <div className={s.flex}>
        <h4>{name}</h4>
        <div className={s.border}>
        <div className={s.level} style={{ width: `${num}%` }}></div>
            <div className={s.circle} style={{left:`${num-2}%`}}></div>
        </div>
    </div>
  )
}

export default Slider