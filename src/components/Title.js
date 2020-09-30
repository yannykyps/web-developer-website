import React from "react"

const Title = ({title, subTitle, styleClass}) => {
  return <div className={`section-title ${styleClass ? styleClass : ""}`}>
    <h2>{title || "default title"}</h2>
    <div className="underline"></div>
    {subTitle && <h4>{subTitle}</h4>}
  </div>
}

export default Title
