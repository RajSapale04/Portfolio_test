import React from 'react'
import s from '../styles/contact.module.css'

const Contact = () => {
  return (
    <div className={s.flex}>
    <h2>Lets Design Together</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
    <div className={s.inp}>
        <input type="email" placeholder='Enter Your Email'/>
        <button>Contact Me</button>
    </div>

</div>
  )
}

export default Contact