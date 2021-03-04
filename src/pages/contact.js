import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactMe from '../components/ContactMe'

const ContactPage = () => {
    return ( 
    <Layout>
    <SEO title="Contact yannyWeb today" description="contact me for a quote" />
    <ContactMe />
    </Layout>
    )
}

export default ContactPage

