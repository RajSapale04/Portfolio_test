'use client'
import React, { useState } from 'react';
import s from '../styles/project.module.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  type project ={
    src:string,
    name:string,
    key:number,
  }

  const projects : project[]=[
    {key:1,name:'AirCalling Landing Page Design',src:'project1.png'},
    {key:2,name:'Business Landing Page Design ',src:'project2.png'},
    {key:3,name:'Ecom Web Page Design ',src:'project3.png'},
  ]
  return (
    <div id='projects' className={s.flex}>
      <h2>My Projects</h2>
      <p className={s.flexp}>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.
        Phasellus consequat urna tellus
      </p>
      <div className={s.tab}>
        {['ALL', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'].map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={ `${s.tabdiv}  ${activeTab === tab ? s.activeTab : ''}`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className={s.card}>
        {projects.map(({key,name,src})=>(
          <ProjectCard key={key} src={src} name={name}/>
        ))}
      </div>

    </div>
  );
};

export default Projects;
