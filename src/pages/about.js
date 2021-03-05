import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Title from "../components/Title"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { technologies, webDev, webDes } from "../constants/skillsbar"

const About = () => {
  const formats = ["auto", "webp", "avif"]
  return (
    <Layout>
      <SEO
        title="About yannyWeb Freelance web design and developer"
        description="About me and my web development experience"
      />
      <section className="about-page">
        <div className="section-center about-center">
          <StaticImage
            src="../assets/hero-img-min.png"
            alt="about me image"
            quality={64}
            width={400}
            height={400}
            placeholder="blurred"
            layout="constrained"
            loading="eager"
            formats={formats}
            className="about-img"
          />
          <article className="about-text">
            <Title titleH1="About Me" />
            <p>
              I am a self-taught Full-Stack JavaScript developer with a passion
              for creating blazing-fast, beautiful and responsive websites and
              apps. I’ve been coding for a very long time, since the age of 17,
              and I’m now a freelance developer based in Milton Keynes, UK.
            </p>
            <p>
              I love using React and the framework it comes with. I combine this
              with JAMstack architecture and Gatsby to create blazing-fast web
              content that's built with modern technology.
            </p>
            <p>
              I like to strike a good balance by creating a nice clean design
              that compliments the brand and content, and to make the content
              load super-fast. This is why I use Gatsby as opposed to other web
              development ecosystems such as WordPress and Drupal.
            </p>

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
    </Layout>
  )
}

export default About
