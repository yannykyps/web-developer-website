import React from 'react'
import Title from './Title'
import { Link } from "gatsby"
import { GoProject, GoPerson } from "react-icons/go"
import { RiFirstAidKitLine } from "react-icons/ri"


const Contact = () => {
    return (
        <section className="section">
        <Title 
        title="get in touch"
        subTitle="Want to work with me? I'm available now." />
            <div className="section-center contact-center">
            <article className="contact">
            <h4>New Projects</h4>
            <div className="underline"></div>
            <GoProject className="contact-icon"/>
            <Link to="/contact/" className="btn contact-center-btn">
            Request Quote
            </Link>
            </article>
            <article className="contact">
            <h4>Existing Projects</h4>
            <div className="underline"></div>
            <RiFirstAidKitLine className="contact-icon"/>
            <Link to="/contact/" className="btn contact-center-btn">
            Contact Me
            </Link>
            </article>
            <article className="contact">
            <h4>Contract Work</h4>
            <div className="underline"></div>
            <GoPerson className="contact-icon"/>
            <Link to="/contact/" className="btn contact-center-btn">
            Enquire
            </Link>
            </article>
            </div>
        </section>
    )
}

export default Contact
