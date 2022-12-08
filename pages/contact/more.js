import React from 'react'

function more() {
  return (
    <div>More about contact page</div>
  )
}

export default more

more.getLayout = (page)=>{
    return (
      <>
        {page}
      </>
    )
}