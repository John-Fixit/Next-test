import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Display from '../../Components/Display'

function contact() {
  return (
    <>
    <Head >
      <title>Contact page</title>
      
    </Head>
    <h2>This is a contact component</h2>
    <Link href="/">To the Landing Page</Link><br />
    <Link href="/about">Go to About page</Link>
    </>
  )
}

export default contact

contact.getLayout = (page)=>{
    return (
      <>
        {page}
      </>
    )
}