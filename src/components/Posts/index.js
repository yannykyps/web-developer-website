import React from "react"
import Post from "./Post"

const Posts = ({ posts, title }) => {
  return (
    <section className="section section-center">
      <h3 className="section-title">{title}</h3>
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
