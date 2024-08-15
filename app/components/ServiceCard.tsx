import React, { FC } from 'react'
import s from '../styles/servicecard.module.css'

type serviceprops ={
    name:string,
    src:string,
}
const ServiceCard :FC<serviceprops> = ({name,src}) => {
  return (

    
    <div className={s.flex}>
        <img src={`/images/${src}`} alt="logo" />
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum </p>
        
        </div>
  )
}

export default ServiceCard