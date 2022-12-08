import React, {useState} from "react";
import style from "../styles/AddTodo.module.css";
function AddTodo({addTodo}) {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [buttonText, setbuttonText] = useState("Create Todo")
    const userDetail = {title, desc}

    const sendFunc=()=>{
        addTodo(userDetail)
       settitle("") 
       setdesc("") 
    }
  return (
    <>
      <div className={style.container_fluid}>
          <div className="col-sm-6 mx-auto shadow py-4 px-3">
                <h3 className={style.card_header}>ADD TODO</h3>
                <div className="form">
                    <div className="form-floating my-2">
                        <input type="text" className="form-control" placeholder="Title" onChange={(e)=>settitle(e.target.value)} value={title}/>
                        <label htmlFor="">Title</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="text" className="form-control" placeholder="Title" onChange={(e)=>setdesc(e.target.value)} value={desc}/> 
                        <label htmlFor="">Todo Description</label>
                    </div>
                    <div>
                        <button className="btn btn-primary w-100" onClick={sendFunc}>Create Todo</button>
                    </div>
                </div>
          </div>
        </div>
    </>
  );
}

export default AddTodo;
