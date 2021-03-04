import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"


const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon" />,
    url: "https://www.facebook.com/yannyweb",
    aria: "TFacebook"
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/yannyk/",
    aria: "LinkedIn"
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"/>,
    url: "https://twitter.com/yannyweb1",
    aria: "Twitter"
  },
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon" />,
    url: "https://github.com/yannykyps",
    aria: "Github"
  },

]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <OutboundLink href={link.url} className="social-link" aria-label={link.aria} target="_blank" rel="noopener noreferrer">
      {link.icon}
      </OutboundLink>
    </li>
  )
})

const socialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}

export default socialLinks
