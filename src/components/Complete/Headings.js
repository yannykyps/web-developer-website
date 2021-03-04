import React from "react"
import styled from "styled-components"

const myH1 = ({ children, title }) => {
  if (title) {
    return (
      <HeadingOne>
        <h2>{children}</h2>
        <div className="underline"></div>
      </HeadingOne>
    )
  }
  return (
    <h1
      style={{
        margin: "2rem 0",
      }}
    >
      {children}
    </h1>
  )
}
const HeadingOne = styled.div`
  margin: 2rem 0;
  .underline {
    width: 5rem;
    height: 5px;
    background: var(--clr-brand);
  }
`

const myH2 = props => {
  return (
    <h2 style={{ margin: "2rem 0 1rem 0"}}>
      {props.children}
    </h2>
  )
}

const myH4 = props => {
  return (
    <h4 style={{ margin: "2rem 0 0.5rem 0"}}>
      {props.children}
    </h4>
  )
}

const myH3 = props => {
  return (
    <h3 style={{ margin: "3rem 0 2rem 0"}}>
      {props.children}
    </h3>
  )
}

const myUl = props => {
  return (
    <ul style={{ margin: "0 0 1rem 0" }}>
      {props.children}
    </ul>
  )
}

export { myH2, myH4, myH3, myUl, myH1 }
