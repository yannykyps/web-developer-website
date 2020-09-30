import React from 'react'
import { GrGatsbyjs } from "react-icons/gr"
import { FaQuoteLeft, FaQuoteRight, FaCheck} from "react-icons/fa"
import Pdf from "../assets/gatsby-one-pager.pdf"



const WhyGatsby = () => {

    return (<section className="section bg-dark">
    <section className="section-center">
  
    <article className="gatsby-stack">
    <GrGatsbyjs className="gatsby-logo-icon" />
    <h3>Why Use Gatsby?</h3>
    <div className="underline"></div>
    <h4 className="skills-quote"><FaQuoteLeft /> The Modern Way To Build The Web <FaQuoteRight />
    </h4>
    <p className="gatsby-ul">These are some of the benefits:</p>
    <ul className="gatsby-ul">
        <li><FaCheck className="gatsby-icon"/> Works with your CMS</li>
        <li><FaCheck className="gatsby-icon"/> Fast development speed ensures project will be on time</li>
        <li><FaCheck className="gatsby-icon"/> Ease of making development changes helps keep project under budget</li>
        <li><FaCheck className="gatsby-icon"/> Lower hosting cost helps keep project under budget</li>
        <li><FaCheck className="gatsby-icon"/> Fast performing websites which reduce page load and response time</li>
        <li><FaCheck className="gatsby-icon"/> Supports creation of highly scalable and dynamic apps</li>
        <li><FaCheck className="gatsby-icon"/> Rich plugin ecosystem which helps tackle complex code</li>
    </ul> 
    <a className="btn center-btn" href={Pdf} rel="noreferrer" target= "_blank">Need More Convincing?</a>   
    </article>
    </section>
    </section>
    )
}

export default WhyGatsby
