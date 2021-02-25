import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import ContactMe from '../components/ContactMe'

const ContactPage = () => {
    return ( 
    <Layout>
    <SEO title="Contact" description="contact me for a quote" />
    <ContactMe />
    <Footer />
    </Layout>
    )
}

export default ContactPage

