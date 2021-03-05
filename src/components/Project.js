import React from 'react'
import { FaShareSquare } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Project = ({title, description, image, url, stack}) => {
    const img = getImage(image)
    return (
        <article className="project">
        <GatsbyImage image={img} alt={title} className="project-img" />
        <div className="project-info">
            <h3>{title}</h3>
            <p>{description}</p>
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
