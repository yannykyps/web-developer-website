import React from 'react'
import Image from "gatsby-image"
import { FaShareSquare } from "react-icons/fa"

const Project = ({title, description, image, url, stack}) => {
    return (
        <article className="project">
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
        <div className="project-info">
            <h3>{title}</h3>
            <p className="project-desc">{description}</p>
        <div className="project-grid">
      <div className="skills-item-stack">
            {stack.map((stack, index) => {
                return <span key={index}>{stack}</span>
            })}
        </div>
        <div className="project-links">   
            <a href={url} aria-label={title} target="_blank" rel="noopener noreferrer">
        <FaShareSquare className="project-icon"/>
      </a>
      </div> 
      </div>
        </div>
        </article>
    )
}

export default Project
