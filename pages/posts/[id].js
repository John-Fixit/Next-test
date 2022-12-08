import { useRouter } from 'next/router'
import React from 'react'

const MoreDetails = ({post}) => {

// let router = useRouter()
// if(router.isFallback){
//     return <div>
//         <h1>Loading...</h1>
//     </div>
// }   
  return (
    <div className='mt-5'>
        <h1>{post.title}</h1>
    </div>
  )
}
export default MoreDetails
export const getStaticPaths = async ()=>{
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    let data = await response.json()
    let paths = data.map((post)=>{
        return {
            params: {id : `${post.id}`}
        }
    })
    // return{
    //     paths: paths,
    //     fallback: false
    // }
    return {
        paths:[
            {params: {id: '1'}},
            {params: {id: '2'}},
            {params: {id: '3'}},
        ],
        fallback: 'blocking',
        revalidate: 10
        // fallback: true
        // fallback: false
    }

}

export const getStaticProps = async(context) =>{
   let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
   let data = await response.json()
    return {
        props: {post: data}
    }
    
}