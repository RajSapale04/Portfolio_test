import React, { FC } from 'react'
import s from '../styles/servicecard.module.css'
import Image from 'next/image'

type serviceprops ={
    name:string,
    src:string,
}
const ServiceCard :FC<serviceprops> = ({name,src}) => {
  return (

    
    <div className={s.flex}>
        <Image src={`/images/${src}`} alt="logo" width={400} height={400}/>
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum </p>
        
        </div>
  )
}

export default ServiceCard