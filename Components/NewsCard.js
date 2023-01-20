import React from 'react'
import Image from "next/Image"
import axios from 'axios'
import { host } from './URI'
import { useRouter } from 'next/router'
// import useSWR from "swr"
function NewsCard() {
    const num = 5
  const router = useRouter()
    const fetcher = (...args)=>{
        axios.get(...args)
    }
    const goToPost=({id})=>{
      router.push(`/posts/${id}`)
    }

    // const {data, err} = useSWR(host, fetcher)

    // if(data){
    //     return (
    //       <div className='row mx-3'>
    //           {
    //               Array(num).fill("John").map((item, id)=>{
    //                       return <div className='col-sm-3 my-3'>
      
    //       <div class="card h-100 p-1">
    //               <Image src={require("../assets/2.jpg")} class="card-img-top" alt="..." width={250} height={250}/>
    //               <div class="card-body">
    //                 <h5 class="card-title">Card title</h5>
    //                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //               </div>
    //               <div class="card-foote ms-auto">
    //                 <button type="button" className='btn btn-primary'>Read More</button>
    //               </div>
    //             </div>
    //                           </div>
    //               })
    //           }
    //             </div>
      
                
    //     )
    // }
    // else{
      return <>Oops! please check your connection
       <div className='row mx-lg-3'>
              {
                  Array(num).fill("John").map((item, id)=>{
                          return <div className='col-sm-3 my-3' key={id}>                  
          <div class="card h-100 p-1">
                  <Image src={require("../assets/2.jpg")} class="card-img-top" alt="..." width={250} blurDataURL={true} height={250}/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                  <div class="card-foote ms-auto">
                    <button type="button" className='btn btn-primary' onClick={()=>goToPost({id})}>Read More</button>
                  </div>
                </div>
                              </div>
                  })
              }
                </div>
      </>
    // }
}

export default NewsCard