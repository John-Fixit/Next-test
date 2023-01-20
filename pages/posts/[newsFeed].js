import React, { useEffect, useState } from "react";
import Image from "next/Image";
import styles from "../../styles/newsFeed.module.css"
import { comment } from "../../Components/Comment";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

function NewsFeed() {
  // injection of packages
  const params = useRouter()

  // useStates
  const [commentText, setcommentText] = useState("")
  
//variables
const toastOption = {
  position: "top-center",
  theme: "colored",
}
  const num = 8;


  const sendComment=()=>{
     var detail = {text: commentText, timeStamp: new Date(), postId: params.query.newsFeed}
    comment(detail).then((res)=>{
      console.log(res)
        if(res.statusText === "Created"){
            toast.success(`Comment added successfully`, toastOption)
            setcommentText("")
        }
    }).catch((err)=>{
      console.log(err)
    })
  }
  
  return (
    <>
      <div className="container-fluid ">
        <div className="col-lg-11 mx-auto">
          <section className="row">
            <aside className="col-md-8">
              <div className="p-2">
                <h3>Messi: Is the real goat</h3>
                <div className="">
                  <Image src={require("../../assets/2.jpg")} className={`${styles.newsImg}`} alt="loading"/>
                </div>
                <div className="" style={{textAlign: "justify"}}>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.This is a wider card with supporting text
                  below as a natural lead-in to additional content. This content
                  is a little bit longer.This is a wider card with supporting
                  text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </div>
              </div>
            </aside>
            <aside className="col-lg-4 col-md-12  mt-5">
              <div>
                <h6>Comment</h6>
                <div className="rounded-3 bg-secondary">
                  <section className="p-2 comment-section ">
                    <div  style={{height: "20rem", width: "100%", overflow: "auto"}}>
                    {Array(num)
                      .fill("Comment")
                      .map((item, id) => {
                        return (
                          <div className="rounded-3 bg-danger border p-2 my-1" key={id}>
                            <section className="text-light">
                              Yes messi is real
                            </section>
                           <section className="text-end text-light">
                              time
                           </section>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Type your comment here"
                        onChange={(e)=>setcommentText(e.target.value)}
                        value={commentText}
                      />
                      <button type="button" className={`rounded-3 btn btn-primary col-12 ${!(!!commentText) && "disabled"}`} onClick={sendComment}>
                        Comment
                      </button>
                    </div>
                  </section>
                </div>
                <div className="mt-3">
                  <h3>Related News</h3>
                  <div>
                    {Array(num)
                      .fill("Related New")
                      .map((item, index) => (
                        <div>
                          <section className="d-flex border-bottom my-2 ">
                            <Image
                              src={require("../../assets/1.jpg")}
                              width={100}
                              height={100}
                            />
                            <span>Ronaldo: Is the real Sheep</span>
                          </section>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default NewsFeed;
