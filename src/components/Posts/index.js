import React from "react"
import Post from "./Post"
import Title from "../Title"

const Posts = ({ posts, title }) => {
  return (
    <section className="section section-center">
      <Title titleH1={title} />
      <div >
        {/* posts column */}
        <article>
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </article>
      </div>
    </section>
  )
}

export default Posts
