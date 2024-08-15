import React from 'react'
import ServiceCard from './ServiceCard'
import s from '../styles/services.module.css'

const Services = () => {

    type card ={
        key:number,
        name:string,
        src: string,
    }
    const cards : card[]=[
        {key:1,name:"UI/UX",src:"logo1.png"},
        {key:2,name:"Web Design",src:"logo2.png"},
        {key:3,name:"App Design",src:"logo3.png"},
        {key:4,name:"Graphic Design",src:"logo4.png"},
    ]
  return (
    <div id='services' className={s.flex}>
        <h2>Services</h2>
        <p className={s.flexp}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
        <div>
            {cards.map(({key,name,src})=>(
                <ServiceCard key={key} name={name} src={src}/>
            ))}
        </div>

    </div>
  )
}

export default Services