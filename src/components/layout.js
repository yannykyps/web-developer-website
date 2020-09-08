/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


const Layout = ({ children }) => {
  console.log(children);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
}

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      {children}
     
    </>
  )
}


export default Layout
