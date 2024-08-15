import React, { FC } from 'react'
import s from '../styles/slidercard.module.css'

type sliderprops={
    src:string,
}
const SliderCard :FC<sliderprops> = ({src}) => {
  return (
    <div className={s.card}>

        <div className={s.image} style={{backgroundImage:`url(${src})`}}></div>

        <div className={s.text}>
            <div className={s.top}>
        <span className={s.quoteMarktop}>“</span>
        Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
        <span className={s.quoteMarkbot}>“</span>
                </div>               
        
            <h2>Name</h2>
            <p>CEO</p>
        </div>
    </div>
  )
}

export default SliderCard