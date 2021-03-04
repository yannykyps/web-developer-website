import React from "react"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Services from "../components/Services"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = ({data}) => {
  const {allProjectsJson:{nodes:projects}} = data
  return (
  <Layout>
    <SEO title="Web Design and Developer, Milton Keynes" description="Specialising in creating blazing fast websites and web designs using React, JAMstack and Gatsby. Using modern technology to futureproof your website."/>
    <Hero />
    <Services />
    <Skills />
    <Projects projects={projects} title="Featured Portfolio" styleClass="bg-dark" showLink/>
    <Contact />
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
export default IndexPage