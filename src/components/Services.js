import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return <section className="section bg-dark">
    <Title 
    title="services"
    subTitle="Website designer and React web developer based in Milton Keynes. Creating beautiful, blazing-fast and very responsive websites using the React, Node and Gatsby frameworks." 
    styleClass="section-title-light"/>
    <div className="section-center services-center">
      {services.map((service)=>{
        const {id,icon,title,text} = service
        return <article key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
        </article>
      })}
    </div>
  </section>

}

export default Services
