import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import MyServices from "../components/MyServices"

const ServicesPage = () => {
    return (
        <Layout>
        <SEO title="My Services as a web design and developer" description="What I can offer you as a web design and developer" />
        <section className="services-page">
        <MyServices />
        </section>
        </Layout>
    )
}

export default ServicesPage
