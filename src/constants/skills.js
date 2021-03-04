import React from "react"
import { GiMagnifyingGlass} from "react-icons/gi"
import { VscEditorLayout } from "react-icons/vsc"
import { AiFillEdit} from "react-icons/ai"
import { GoRocket} from "react-icons/go"


const skills = [
  {
    id: 1,
    icon: <GoRocket className="skills-icon" />,
    title: "Blazing-Fast",
    text: `I create blazing-fast web content. I put a lot of emphasis on making sure web content is delivered fast to your customers. Every millisecond counts.`,
  },
  {
    id: 2,
    icon: <GiMagnifyingGlass className="skills-icon" />,
    title: "SEO",
    text: `I can help your site rank and perform better in search engines. Using React and Gatsby makes your site fast and efficient for search engine crawlers, like Googlebot, to crawl your site and index your pages.`,
  },
  {
    id: 3,
    icon: <VscEditorLayout className="skills-icon" />,
    title: "Responsive",
    text: `Websites will look great and will respond to the user’s behavior and environment based on screen size, platform and orientation. Built as a Progressive Web App (PWA).`,
  },
  {
    id: 4,
    icon: <AiFillEdit className="skills-icon" />,
    title: "editable content",
    text: `You will be able to edit your own content through a content management system (CMS) of your choice, whether that is WordPress, Drupal, Contentful, Shopify, plus many more.`,
  },
]

export default skills
