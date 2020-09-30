import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from "../components/Footer"
import MyServices from "../components/MyServices"

const ServicesPage = () => {
    return (
        <Layout>
        <SEO title="Yanny's Services" description="My services" />
        <section className="services-page">
        <MyServices />
        </section>
        <Footer />
        </Layout>
    )
}

export default ServicesPage
