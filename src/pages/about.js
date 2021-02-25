import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Title from "../components/Title"
import Layout from '../components/Layout'
import SEO from "../components/SEO"
import Footer from '../components/Footer'
import {technologies, webDev, webDes} from "../constants/skillsbar"

const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid(quality:64 maxWidth:400) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

const About = ({data}) => {
    const {file: {childImageSharp: {fluid}}} = useStaticQuery(query)
    return (<Layout>
        <SEO title="About Yanny" description="About me and my web development experience" />
        <section className="about-page">
            <div className="section-center about-center">
            <Image fluid={fluid} className="about-img" />
            <article className="about-text">
            <Title titleH1="About Me" />
            <p>I am a self-taught Full-Stack JavaScript developer with a passion for creating blazing-fast, beautiful and responsive websites and apps. I’ve been coding for a very long time, since the age of 17, and I’m now a freelance developer based in Milton Keynes, UK.</p>
            <p>I love using React and the framework it comes with. I combine this with JAMstack architecture and Gatsby to create blazing-fast web content that's built with modern technology.</p>
            <p>I like to strike a good balance by creating a nice clean design that compliments the brand and content, and to make the content load super-fast. This is why I use Gatsby as opposed to other web development ecosystems such as WordPress and Drupal.</p>

            <div className="about-stack">
                {technologies.map((skill, index) => {
                    return <span key={index}>{skill}</span>
                })}
                {webDev.map((skill, index) => {
                    return <span key={index}>{skill}</span>
                })}
                {webDes.map((skill, index) => {
                    return <span key={index}>{skill}</span>
                })}
            </div>
            </article>
            </div>
        </section>
        <Footer />
        </Layout>
    )
}



export default About
