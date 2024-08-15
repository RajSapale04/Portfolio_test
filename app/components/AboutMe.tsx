import React from 'react'
import s from '../styles/aboutme.module.css'
import Slider from './Slider';
import Image from 'next/image';


const AboutMe = () => {
  type Slider = {
    key: number;
    name: string;
    num: number;
  };
  
  const sliders:Slider[]=[
    {key:1,name:"UX",num:85},
    {key:2,name:"Website Design",num:80},
    {key:3,name:"App Design",num:90},
    {key:4,name:"Grahic Design",num:85}
  ]
  return (
    <div id='about-me' style={{paddingTop:'1px'}}>
    <div  className={s.hero}>
      <div>

    <div className={s.hero2}>
    <div className={s.div1}></div>
    <div className={s.line}></div>
    <Image src="/images/image2.png" alt="Description" width={400} height={400}/>
      </div>
    </div>
    <div className={s.hero1}>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        {sliders.map(({key,name,num})=>(
          <Slider key={key} name={name} num={num}/>
        ))}

    </div>
    </div>
    </div>
  )
}

export default AboutMe