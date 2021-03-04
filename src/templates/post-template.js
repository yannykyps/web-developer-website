import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"
import Layout from "../components/Layout"

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date, meta, ogImage },
      body,
    },
  } = data
  return (
    <Layout>
      <SEO
        title={title}
        description={meta}
        ogImage={ogImage.childImageSharp.fixed.src}
        content="article"
      />
      <Wrapper>
        {/* post info */}
        <article className="section">
          <div className="img">
            <Image fluid={image.childImageSharp.fluid} />
          </div>
          <div className="post-info">
            <span>{category}</span>
            <h1>{title}</h1>
            <p>{date}</p>
            <div className="underline"></div>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMM Do, YYYY")
        readTime
        slug
        meta
        image {
          childImageSharp {
            fluid(quality: 64, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ogImage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        category
      }
      body
    }
  }
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-dark-shade);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h1 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-brand);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  .img {
    max-width: 800px;
    margin: auto;
  }
`

export default PostTemplate
