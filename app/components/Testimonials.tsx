import React from 'react'
import s from '../styles/testimonials.module.css'
import TestiSlider from './TestiSlider'
const Testimonials = () => {
  return (
    <>
    <div id='testimonials' className={s.flex}>
    <h2>Testimonials</h2>
    <p className={s.flexp}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
    </div>
    <TestiSlider/>
    </>
  )
}

export default Testimonials