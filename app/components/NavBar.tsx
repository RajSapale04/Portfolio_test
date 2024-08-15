import React from 'react'
import styles from '../styles/navbar.module.css'
const NavBar = () => {
  return (
    <div id='home' style={{paddingTop:'1px'}}>  

    <div className={styles.navbar}>
        <div className={styles.logo}>
            <div className={styles.logoc}>MU</div>
            <div className={styles.logot}><span>M</span>umair</div>

        </div>
        <div className={styles.navb}>
        <a href="#home">Home</a>
        <a href="#about-me">About Me</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
            <div className={styles.download}>Download CV</div>
        </div>
    </div>
    </div>
  )
}

export default NavBar