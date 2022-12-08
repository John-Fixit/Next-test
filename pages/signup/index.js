import axios from 'axios'
import React, { useState } from 'react'

function Index() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submit= async()=>{
        let detail = {name, email, password}
       let response = await axios.post('api/signup', detail)
       let data = await response
       console.log(data.data);
    }
  return (
   <>
        <div className='col-sm-5 mx-auto shadow p-3'>
                <div className='form my-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" className='form-control' onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div className='form my-2'>
                    <label htmlFor="">email</label>
                    <input type="email" className='form-control'  onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div className='form my-2'>
                    <label htmlFor="">Password</label>
                    <input type="password" className='form-control'  onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <button  className='btn btn-danger' onClick={submit}>Submit</button>
        </div>
   </>
  )
}

export default Index