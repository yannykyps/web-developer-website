import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Footer from "../components/Footer"

const Success = () => (
  <Layout>
    <SEO title="Success" description="Form submitted to Yanny"/>
    <main className="error-page">
  <div className="error-container">
    <h2>Form Submitted, Thanks!</h2>
    <Link to="/" className="btn">
    back home
    </Link>
  </div>
  </main>
  <Footer />
  </Layout>
)

export default Success
