import React from 'react'
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import {technologies, webDev, webDes, hosting} from "../constants/skillsbar"
import Title from './Title';
import { Link } from "gatsby"

const MissionStatement = () => {
    return (<section className="section">
    <div className="section-center">
    <Title 
    title="Why Hire Me?"
    subTitle="If you are looking for a freelance web developer, an experienced React developer or you just want to make a few changes to your current website, then I can help you. Are you looking to move away from WordPress? Are WordPress plugins slowing your website down? Then using my solution will be the perfect fit." />

        <div className="mission-section section-center skills-center">
        
    <article className="skills-stack">
    <h4>Mission Statement</h4> 
    <div className="underline"></div>
    <p>I build websites and apps based on a full stack JavaScript. Depending on your requirements, I will tailor the best solution that will suit both you and the project.</p>  
    <p>I concentrate on building websites that offer the best user experience (UX) by making the website design is blazing-fast and making it responsive to all screen sizes.</p>
    <p>I will use Search Engine Optimisation (SEO) to rank your site on google, using the best techniques and keywords to get your site more hits.</p>
    <p>Do you need a logo? I can create a fantastic design using Adobe Illustrator.</p>
    <p>I charge flat rates for all of my projects, not by the hour. <strong><Link to="/contact/">Contact Me</Link> for a quote. Alternatively, call me on 07947187536 or email me on <a href="mailto:yanny@yannyweb.com?subject=Project%20Enquiry" >yanny@yannyweb.com</a></strong></p>
    </article>
    <article className="skills-stack">
    <h4>Skills Summary</h4>
    <div className="underline"></div>
    <ul>
      <li>Full Stack JavaScript Developer</li>
      <li>Agile Certified</li>
      <li>ITIL Certified</li>
      <li>Leadership Experience</li>
    </ul>
    <div className="skills-item-stack">
    <p>Technologies</p>
    {technologies.map((skill, index) => {
        return <span key={index}>{skill}</span>
    })}
    </div>
    <div className="skills-item-stack">
    <p>Web Development</p>
    {webDev.map((skill, index) => {
        return <span key={index}>{skill}</span>
    })}
    </div>
    <div className="skills-item-stack">
    <p>Web Design & UX</p>
    {webDes.map((skill, index) => {
        return <span key={index}>{skill}</span>
    })}
    </div>
    <div className="skills-item-stack">
    <p>Hosting</p>
    {hosting.map((skill, index) => {
        return <span key={index}>{skill}</span>
    })}
    </div>
    </article>
    </div>  
    </div>
    <div className="skills-quote-section section-center">
    <h3 className="skills-quote">
    <FaQuoteLeft /> I love helping small businesses reach their potential on a digital platform <FaQuoteRight /></h3>
    <p>During these current times, small businesses need as much help as they can get. Making the perfect website that will get you more customers and maximise your ROI is what I love doing. Find out more <Link to="/about/">about me</Link> and take a look at <Link to="/services/">my services</Link> to see what I can offer to you.</p>
    </div>
    </section>

    )
}

export default MissionStatement
