import React from 'react'
import Title from './Title';
import skills from "../constants/skills"
import WhyGatsby from './WhyGatsby';
import MissionStatement from "./MissionStatement"

const Skills = () => {


    return ( <div><section className="section">
    <Title 
    title="Blazing-Fast Websites"
    subTitle="All my website designs are built to run blazing-fast on all platforms. This is why I use React and Gatsby as my framework of choice. I build my websites as Progessive Web Apps, PWAs (where possible), which are web applications that work both as a website and a smartphone app that can be installed." />
    
    <div className="section-center mini-skills-center">
    {skills.map((skill)=>{
        const {id,icon,title,text} = skill
        return <article key={id} className="skills">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
        </article>
      })}
    </div>
    </section>   
        <WhyGatsby />
        <MissionStatement /> 
        </div>
    )
}

export default Skills
