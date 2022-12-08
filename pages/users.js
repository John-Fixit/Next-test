import React from 'react'

const Users = (props) => {
  return (
    <>
        <div>users</div>
    </>
  )
}

export default Users

export const getStaticProps = async() =>{
    let response = await fetch("https://jsonplaceholder.typicode.com/users")

    let data = await response.json()
    return {
        props: {users: data}
    }

}