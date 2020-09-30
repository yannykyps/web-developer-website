import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
  file(relativePath: {eq: "background.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Background = ({children}) => {
    const {file: {
        childImageSharp: {fluid},
      },
    } = useStaticQuery(query);
    return (
        <div>
    <BackgroundImage Tag="div" fluid={fluid} className="bcg" preserveStackingContext={true}>
      {children}
    </BackgroundImage>
        </div>
    )
}

export default Background
