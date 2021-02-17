import React from 'react'
import Title from './Title'

const MyServices = () => {
    return (
    <section className="section">
    <Title titleH1="My Services" />
        <div className="section-center my-services-center">
        <div className="my-services">
            <p>As a standard, all my websites will come with:</p>
            <ul>
                <li><a href="https://web.dev/what-are-pwas/" target="_new">Progressive Web App (PWA)</a> - Capable, Reliable and Installable.</li>
                <li>Mobile Responsive Design - Pre-requisite for PWA.</li>
                <li>Google Analytics.</li>
                <li>Google Maps.</li>
                <li>SEO Optimised.</li>
                <li>Free Hosting - Depending on type and size of website. </li>
                <li>Content Management System (CMS) - For you to edit the site content.</li>
            </ul>
        </div>
        <div className="my-services">
            <h4>What do you want from the website?</h4>
            <p>I will ask you the following types of questions:</p>
            <ul>
                <li>How many pages?</li>
                <li>Will you be selling products (ecommerce)?</li>
                <li>What type of content do you have?</li>
                <li>What type of functionality you require?</li>
            </ul>
            <p>After a quick discussion, I can provide you with an initial quote. We can then discuss what I can offer you in more detail, so you have a greater understanding of what you can expect from your website.</p>
            </div>
            <div className="my-services">
            <h4>Content and Structure</h4>
            <p>Content is the heart of your website. This is what is going to get the customers visiting your website and giving you more business. Content will also help you rank higher in search engines. </p>
            <p>We will collaborate on the content you want added to your website and the structure you would like.</p>
            </div>
            <div className="my-services">
            <h4>Design</h4>
            <p>This is the fun part. I will create a bespoke design that matches your business’s theme, values and target audience. The design I will create will be responsive on all screen sizes. My design will be easy to use and interact with, which will enhance customer experience and make sure they find value in using it.</p>
            <p>If you have your own ideas on the design, that’s great. I will work with your theme and just enhance it.
            </p>
            <p>Depending on your initial requirements, you will have the following which you will own the copyright to.</p>
            <ul>
                <li>Full Design</li>
                <li>Logo</li>
                <li>Styling Guide</li>
            </ul>
            </div>
            <div className="my-services">
            <h4>Building the website</h4>
            <p>This is where the real coding begins. I will compile everything from the previous stages, and start creating your website.
            </p>
            <p>You will have constant access to the website during the building process, giving you confidence that your website is on track and progressing nicely.</p>
            </div>
            <div className="my-services">            
            <h4>Go Live</h4>
            <p>Once you are happy with the build, I will deploy your site.</p>
            </div>
            <div className="my-services"> 
            <h4>Post live maintenance</h4>
            <p>Any bugs you find in the first month of going live will be fixed free of charge.</p>
            </div>
            <div className="my-services"> 
            <h4>Post Improvements</h4>
            <p>Want to add more functionality to the website? Let’s discuss your improvements and I will charge a flat rate.</p>
            </div>
            <div className="my-services"> 
            <h3>FAQs</h3>
            <div className="my-services"> 
            <h4>What other costs are associated with the website?
            </h4>
            <p>Domain name – Range from £5 per year.</p>
            <p>Hosting – Depends on the type of website I am building you. Gatsby built sites - Hosting costs will be free. React and Database heavy websites start at around £15 per month.</p>
            <p>Ecommerce – I can build a shopping cart for free. Shopping carts like SnipCart, Shopify and payment processing platforms (Stripe, WorldPay, Square) come with their own fees which is a small percentage of transaction fee.</p>
            </div>
            <div className="my-services">
            <h4>Will I be able to update the content? </h4>
            <p>Yes, all content will be available through a content management system (CMS). There are plenty to choose from and I am happy to use yours if you have a preference. If not, I will choose one and train you on how to use it.</p>
            </div>
            <div className="my-services">
            <h4>Will I own copyrights to the website?</h4>
            <p>Yes, all content, design and logos will be yours.</p>
            </div>
            </div>
        </div>
            
    </section>
    )
}

export default MyServices
