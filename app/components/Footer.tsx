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
        <div>Home</div>
            <div>About Me</div>
            <div>Services</div>
            <div>Projects</div>
            <div>Testimonials</div>
            <div>Contact</div>
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