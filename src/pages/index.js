import React from "react"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Services from "../components/Services"
import Skills from "../components/Skills"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default ({data}) => {
  const {allStrapiProjects:{nodes:projects}} = data
  return (
  <Layout>
    <SEO title="Home" description="Yanny Kyps Freelance Web Developer Home Page"/>
    <Hero />
    <Services />
    <Skills />
    <Projects projects={projects} title="Featured Portfolio" styleClass="bg-dark" showLink/>
    <Contact />
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
  }`