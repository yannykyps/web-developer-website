import React from 'react'
import Title from './Title'
import { Link } from "gatsby"
import Project from "./Project"

const Projects = ({projects, title, titleH1, showLink, styleClass}) => {
    return (
        <section className={`section ${styleClass ? styleClass : ""}`}>
         {title && <Title title={title} styleClass="section-title-light"/>}
         {titleH1 && <Title titleH1={titleH1} styleClass="section-title-light"/>}
         <div className="section-center projects-centre">
         {projects.map((project, index) => {
            return <Project key={project.id} index={index} {...project}/>
        })}
       
    
         </div>
        {
            showLink && <Link to="/projects/" className="btn center-btn">
            portfolio
            </Link>
        }   
        </section>
    )
}

export default Projects
