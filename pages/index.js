import React, { useState } from 'react'
import AddTodo from '../Components/AddTodo'
import Display from '../Components/Display'
import style from '../styles/Index.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from "next/head"
import Navbar from '../Components/navbar'
import Image from 'next/image'
function Home() {
  const [allTodoItem, setallTodoItem] = useState([])
  const toastOptions = {position: 'top-left', autoClose: 8000, pauseOnHover: true, draggable: true, theme: 'colored'}
  const toastOpt = {position: 'top-right', autoClose: 8000, pauseOnHover: true, draggable: true, theme: 'colored'}
    const addTodo=(todoDetail)=>{
      if(todoDetail.title != "" && todoDetail.desc != ""){
        let newTodo = [...allTodoItem, todoDetail]
        setallTodoItem(newTodo)
        toast.success('Item added successfully', toastOptions)
      }
      else{
        toast.error('All input must be filled', toastOptions);
      }
    }

    const editFunction = (detail)=>{
      allTodoItem[detail.currentIndex] = {title:detail.title, desc: detail.desc}
      setallTodoItem(allTodoItem)
      toast.success('Updating done successfully', toastOpt)
    }

    const deleteFunction = (index)=>{
      let filteredArray = allTodoItem.filter((item, i)=> i != index)
      setallTodoItem(filteredArray)
      toast.success('Item deleted successfully', toastOpt)
    }
  return (
    <>
    <Head>
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script> */}
    </Head>

<div className='mt-5'>

      <Image src="/avater1.png" alt="" width="500" height="550"/>
      <AddTodo addTodo={addTodo} />

      <Display deleteFunction={deleteFunction} editFunction={editFunction} allTodoItem = {allTodoItem}/>

      <ToastContainer />
      </div>
    </>
  )
}

export default Home