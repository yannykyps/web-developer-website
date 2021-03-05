import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SocialLinks from "../constants/socialLinks"
import Typewriter from "typewriter-effect"

const Hero = () => {
  const formats = ["auto", "webp", "avif"]
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
        <div className="hero-img">
        <StaticImage
          src="../assets/hero.png"
          alt="hero"
          quality={64}
          placeholder="blurred"
          layout="constrained"
          loading="eager"
          formats={formats}
        />
        </div>
      </div>
    </header>
  )
}

export default Hero
