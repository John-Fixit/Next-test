import React from 'react'

function EachOne({good}) {
  return (
    <div>
        <h1>{good.name}</h1>
        <p>{good.price}</p>
    </div>
  )
}

export default EachOne



export const getServerSideProps = async(context)=>{
    let response = await fetch(`http://localhost:4000/${context.params.id}`)
    let data = await response.json()
    return {
        props: {
            good: data
        }
    }
}