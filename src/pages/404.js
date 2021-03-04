import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="Error 404 Page"/>
    <main className="error-page">
  <div className="error-container">
    <h1>oops! something's not right.</h1>
    <Link to="/" className="btn">
    back home
    </Link>
  </div>
  </main>
  </Layout>
)

export default NotFoundPage
