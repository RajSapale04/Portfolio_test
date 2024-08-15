import React from 'react'
import s from '../styles/hero.module.css'
import Socials from './Socials'

const Hero = () => {
  return (
    <div className={s.hero}>
        <div className={s.hero1}>
            <h6>Hi I am</h6>
            <h5>Muhammad Umair</h5>
            <h1>UI & UX</h1>
            <h1 className={s.left}>Designer</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
            <div>
               <button>Hire Me</button>
              </div>
        </div>
        <div>

        <div className={s.hero2}>
    <div className={s.div1}></div>
    <div className={s.line}></div>
    <img src="/images/image1.png" alt="Description" />
    </div>
    <Socials/>         
        </div>
    </div>
  )
}

export default Hero