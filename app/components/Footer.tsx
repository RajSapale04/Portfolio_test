import React, { FC } from 'react'
import s from '../styles/footer.module.css'
import Socials from './Socials'

const Footer :FC = () => {
  return (<>
    <div className={s.container}>

        <div className={s.logo}>
            <div className={s.logoc}>MU</div>
            <div className={s.logot}><span>M</span>umair</div>

        </div>


        <div className={s.navb}>
        <a href="#home">Home</a>
        <a href="#about-me">About Me</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        </div>

        <div className={s.socials}>

        <Socials/>
        </div>

    </div>
            <div className={s.end}>
            © 2023 <span>Mumair</span> All Rights Reserved , Inc.
            </div>
            </>
  )
}

export default Footer