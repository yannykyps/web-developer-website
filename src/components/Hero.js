import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Typewriter from "typewriter-effect"

const query = graphql`
  {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(quality: 64, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Yanny,</h1>
            <h3>
              freelance web developer,
              <br />
              based in Milton Keynes
            </h3>

            <div className="typewriter-div">
              <Typewriter
                onInit={typewriter => {
                  typewriter.typeString("Available For Hire, Now").start()
                }}
              />
            </div>
            <Link to="/contact/" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image
          fluid={fluid}
          durationFadeIn={150}
          loading="eager"
          alt="hero"
          className="hero-img"
        />
      </div>
    </header>
  )
}

export default Hero
