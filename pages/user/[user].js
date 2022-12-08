import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
function Parameter() {
    let router = useRouter();
    let username = router.query['user']
    // useEffect(()=>{
    //     console.log(router.query['user']);
    // })
  return (
    <>
    <h1>Dear {username} welcome to your page</h1>
    
    </>
  )
}

export default Parameter