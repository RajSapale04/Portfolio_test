import React, { FC } from 'react'
import s from '../styles/projectcard.module.css'
import Image from 'next/image'

type projectprops={
  src:string,
  name:string,
}

const ProjectCard :FC<projectprops> = ({src,name}) => {
  return (
    <div className={s.main}>
      <Image src={`/images/${src}`} alt=""  width={400} height={400}/>
      <p>Web Design</p>
      <h4>{name}</h4>
    </div>
  )
}

export default ProjectCard