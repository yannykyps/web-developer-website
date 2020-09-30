import React from 'react'
// import PropTypes from "prop-types"
import Image from "gatsby-image"
// import { FaShareSquare } from "react-icons/fa"

const Project = ({title, description, image, url}) => {
    return (
        <article className="project">
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
        <div className="project-info">
            <h3>{title}</h3>
            <p className="project-desc">{description}</p>
        {/* <div className="project-links">   
            <a href={url}>
        <FaShareSquare className="project-icon"/>
      </a>
      </div>  */}
        </div>
        </article>
    )
}

// Project.propTypes = {}

export default Project
