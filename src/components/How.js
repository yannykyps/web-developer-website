import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import Title from './Title'

const query = graphql`
{
    file(relativePath: {eq: "infographic-min.png"}) {
      childImageSharp {
        fluid(quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const How = () => {
const {file:{childImageSharp:{fluid}}} = useStaticQuery(query)

    return (
    <section className="section bg-light">
    <div className="section-center">
    <Title title="How I Build Websites"
    subTitle="Often referred to as JAMstack development. This is an architecture designed to make the web faster, more secure and easier to scale."/>
    <article className="how"> 
    <h3>Why JAMstack?</h3>
    <div className="underline"></div>
    <p>
    JAMstack's biggest advantage is the way that it delivers websites to visitors. The website is pre-built into highly optimised static pages and assets (images, videos) during the build process. The pre-built site can then be served directly from a <strong>CDN (Content Delivery Network)*</strong> which removes the need for a server to host and deliver your website.   
    </p>
    <p>
    When someone visits a page, the CDN will deliver the pre-built page blazing-fast as it does not need to retrieve it from a server.
    </p>
    <p>
    <strong>*CDN (Content Delivery Network)</strong> - A distributed network optimised for serving assets to users. By being geographically distributed, a CDN can provide redundancy and also improve delivery performance as a result of servicing requests from the infrastructure closest to the user making the request.
    </p>
    <div className="how-section">
    <h4>Using Services</h4>
    <div className="underline"></div>
    <p>
    JAMstack is built in a way where all the sites code, content and services are separate or decoupled. By using this approach you can leverage the expertise of the 3rd party services to add additional functionality to the site. Another benefit is that this makes your website more difficult to hack as all information is not in one place.    
    </p>
    <p>The infographic below illustrates what can be decoupled from the actual website but can also be easily implemented, if required.</p>
    <Image className="infographic" alt="jamstack infographic" fluid={fluid} />
    <h4>Benefits</h4>
    <div className="underline"></div>
    <ul className="how-ul">
        <li><strong>Better Performance</strong> - Website has already been pre-built and is ready for visitors, making it blazing-fast. Speed is also an important aspect of SEO. </li>
        <li><strong>More Secure</strong> - Because everything is separate, attacks are more difficult. You can utilise all the specialised 3rd party services you use to help prevent attacks.</li>
        <li><strong>Cheaper, Easier Scaling</strong> - No more server upgrading to handle your traffic. Leverage your 3rd party services to do all the heavy lifting.</li>
    </ul>
    <div className="how-section">
    <h4>Want to find out more?</h4>
    <div className="underline"></div>
    <p>There are many more benefits to this type of modern web development. By using modern technologies and architecture, you can future proof your business and be ready to scale up. Want to find out more? <Link to="/contact/">Get in touch</Link>.</p>
    </div>
    </div>
    </article>
    
    </div>
    </section>
    )
}

export default How


