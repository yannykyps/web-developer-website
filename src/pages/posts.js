import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SEO from "../components/SEO"
import Posts from '../components/Posts'

const PostsPage = ({ data }) => {
  const {allMdx:{nodes:posts}} = data;
  return <Layout>
  <SEO title="Posts, Blogs on web development" description="posts, blogs about web developement and web design" />
    <Posts posts={posts} title="all posts" />
  </Layout>
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMM Do, YYYY ")
          slug
          readTime
          image {
            childImageSharp {
              gatsbyImageData(
                width: 992
                quality: 64
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
              )
            }
          }
        }
        id
      }
    }
  }
`
export default PostsPage
