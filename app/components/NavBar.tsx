import React from 'react'
import styles from '../styles/navbar.module.css'
const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <div className={styles.logoc}>MU</div>
            <div className={styles.logot}><span>M</span>umair</div>

        </div>
        <div className={styles.navb}>
            <div>Home</div>
            <div>About Me</div>
            <div>Services</div>
            <div>Projects</div>
            <div>Testimonials</div>
            <div>Contact</div>
            <div className={styles.download}>Download CV</div>
        </div>
    </div>
  )
}

export default NavBar