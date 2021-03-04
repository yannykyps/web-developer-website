import React from "react"
import { FiInfo } from "react-icons/fi"
import styled from "styled-components"

const Blockquote = ({ children, display }) => {
  if (display === "info")
    return (
      <Wrapper>
        <div className="container info">
          <FiInfo className="icon" />
          {children}
        </div>
      </Wrapper>
    )
}
const Wrapper = styled.blockquote`
  .container {
    padding: 2rem 1.5rem;
    border-radius: var(--radius);
    position: relative;
    margin: 2rem 0;
  }
  @media (min-width: 1170px) {
    .container {
      margin-left: -2rem;
      margin-right: -2rem;
    }
  }
  .icon {
    position: absolute;
    top: 0;
    left: -3px;
    background: var(--clr-dark-shade);
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .info {
    background: var(--clr-alternative);
    .icon {
      color: var(--clr-brand);
    }
  }
`
export default Blockquote
