import React from "react"

const Title = ({title, titleH1, subTitle, styleClass}) => {
  return <div className={`section-title ${styleClass ? styleClass : ""}`}>
    {title && <h2>{title || "default title"}</h2>}
    {titleH1 && <h1>{titleH1 || "default title"}</h1>}
    <div className="underline"></div>
    {subTitle && <h4>{subTitle}</h4>}
  </div>
}

export default Title
