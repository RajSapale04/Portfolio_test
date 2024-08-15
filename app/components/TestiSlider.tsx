"use client";
import React, { useRef, useState } from "react";
import s from "../styles/testislider.module.css";
import SliderCard from "./SliderCard";

const TestiSlider: React.FC = () => {
  const [index,setIndex]=useState(1)
  const handleClick=(key:number)=>{
    setIndex(key)

  };

  type data ={
    key:number,
    src:string,

  }

  const card :data[]=[
    {key:0,src:'/images/slide1.jpeg'},
    {key:1,src:'/images/slide2.jpeg'},
    {key:2,src:'/images/slide1.jpeg'},
    {key:3,src:'/images/slide2.jpeg'},
  ]


  

  return (
    <>
    <div className={s.main}>
      {card.map(({key,src})=>(

        <div className={s.maindiv} onClick={()=>{handleClick(key)}}  key={key} style={{translate:`${-103*index}%`, opacity:`${key==index?'1':'0.2'}`}}>
          <SliderCard src={src}/>
        </div>
      ))}
    </div>
      <div className={s.button}>
        {card.map(({key})=>(

          <div key={key} onClick={()=>{handleClick(key)}} style={{backgroundColor:`${key==index?'#fd6f00':'#D9D9D9'}`}}></div>
        ))}
      </div>
    </>
  );
};

export default TestiSlider;
