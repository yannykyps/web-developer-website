import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({data:{allProjectsJson:{nodes:projects}}}) => {
    
     return (<Layout>
     <SEO title="Projects Portfolio web designs" description="Creating beautiful and clean web designs that are very responsive and blazing-fast" />
    <section className="projects-page">
      <Projects projects={projects} titleH1="portfolio" />
    </section>
    </Layout>
     )
  }

export const query = graphql`
{
  allProjectsJson(sort: {fields: id, order: DESC}) {
    nodes {
      date
      description
      id
      title
      url
      stack
      image {
        childImageSharp {
          gatsbyImageData(
            width: 870
            quality: 64
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED
          )
        }
      }
    }
  }
}
`

export default ProjectsPage