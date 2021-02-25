import React from "react"
import Title from "../components/Title"
import SocialLinks from "../constants/socialLinks"

const ContactMe = () => {
  return (
    <section className="contact-page">
      <Title
        titleH1="Contact"
        subTitle="Do you want a blazing-fast website? Want to work with me? Get in touch"
      />
      <div className="contact-section section-center contact-section-center">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form
            name="contact"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            method="POST"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="phone number(optional)"
                className="form-control"
              />
              <textarea
                name="message"
                placeholder="message"
                rows="5"
                className="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit
            </button>
          </form>
        </article>
        <article className="contact-details">
          <h3>Contact Details</h3>
          <div className="form-group">
            <p>
              <strong>Want to call or email me instead?</strong>
            </p>
            <span>
              <strong>Phone</strong>
            </span>
            <p>07947187536</p>
            <span>
              <strong>Email</strong>
            </span>
            <p>
              <a href="mailto:yanny@yannyweb.com?subject=Project%20Enquiry">
                yanny@yannyweb.com
              </a>
            </p>
            <span>
              <strong>Where I Work</strong>
            </span>
            <p>Milton Keynes and the surrounding area, including London, but can take on any project remotely.</p>
            <SocialLinks styleClass="contact-social-links" />
          </div>
        </article>
      </div>
      <div className="section-center">
        <iframe
          className="map"
          title="yannyWeb location map"
          src="https://maps.google.com/maps?q=yannyweb&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default ContactMe
