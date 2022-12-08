import Link from 'next/link'
import React from 'react'

const Post = ({posts}) => {
  return (
    <>
        {
            posts.map((post)=>{
                return (
                    <div key={post.id}>
                        <Link href={`/posts/${id}`}>
                            <h1>{post.id} {post.title}</h1>
                            </Link>
                            <hr/>
                    </div>
                )
            })
        }
    </>
  )
}

export default Post

export const getStaticProps = async () =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json();
    return {
        props: {posts: data}
    }
}