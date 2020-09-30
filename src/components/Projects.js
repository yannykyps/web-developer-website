import React from 'react'
import Title from './Title'
import { Link } from "gatsby"
import Project from "./Project"

const Projects = ({projects, title, showLink, styleClass}) => {
    return (
        <section className={`section ${styleClass ? styleClass : ""}`}>
         <Title title={title} styleClass="section-title-light"/>
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
