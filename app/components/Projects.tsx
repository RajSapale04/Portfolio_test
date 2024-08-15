'use client'
import React, { useState } from 'react';
import s from '../styles/project.module.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={s.flex}>
      <h2>Projects</h2>
      <p className={s.flexp}>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.
        Phasellus consequat urna tellus
      </p>
      <div className={s.tab}>
        {['ALL', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'].map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={activeTab === tab ? s.activeTab : ''}
          >
            {tab}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Projects;
