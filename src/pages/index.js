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
  const {allProjectsJson:{nodes:projects}} = data
  return (
  <Layout>
    <SEO title="Yanny" description="Freelance Web Developer services based in Milton Keynes, UK. Specialising in creating blazing fast web content using React and Gatsby."/>
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
            fluid(quality:64 maxWidth:870) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`