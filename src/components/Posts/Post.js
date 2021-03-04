import React from 'react'
import Image from 'gatsby-image'
import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = ({frontmatter, excerpt}) => {
  const {title, image, slug, date, category, readTime} = frontmatter;
  return <Wrapper>
    <Image fluid={image.childImageSharp.fluid} className="img" />
    <div className="info">
      <span className="category">{category}</span>
      <h3>{title}</h3>
      <div className="underline"></div>
      <p>{excerpt}</p>
      <Link to={`/posts/${slug}/`} className="link">
        Continue Reading <IoMdArrowRoundForward />
      </Link>
      <footer>
        <span className="date">
          <FaRegClock className="icon"/>
          {date}
        </span>
        <span>{readTime} min read</span>
      </footer>
    </div>
  </Wrapper>
}

const Wrapper = styled.article`
  margin-bottom: 3rem;
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    height: 20rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-dark-shade);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-white);
  }
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-brand);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.8;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: var(--clr-dark-shade);
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    color: var(--clr-brand);
  }
  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-dark-shade);
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 30rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Post
