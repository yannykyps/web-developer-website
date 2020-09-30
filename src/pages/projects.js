import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Footer from "../components/Footer"

const ProjectsPage = ({data:{allStrapiProjects:{nodes:projects}}}) => {
    
     return (<Layout>
     <SEO title="Yanny's Portfolio" description="Portfolio of my work" />
    <section className="projects-page">
      <Projects projects={projects} title="portfolio" />
    </section>
    <Footer />
    </Layout>
     )
  }

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        description
        title
        url 
        image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`

export default ProjectsPage