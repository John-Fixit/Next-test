import React, { useEffect, useState } from "react";
import Image from "next/Image";
import styles from "../../styles/newsFeed.module.css";
import { comment } from "../../Components/Comment";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { host } from "../../Components/URI";
import { likePost } from "../../Components/like";

import {FaFacebook, FaRegThumbsUp, FaThumbsUp, FaTwitter, FaWhatsapp} from "react-icons/fa"

function NewsFeed({data}) {

  const params = useRouter();
  let likeOption = false;
  const [likeStatus, setlikeStatus] = useState(false)

  // console.log(data)
  useEffect(() => {
    if (localStorage.alreadyLiked) {
      likeOption = sessionStorage.getItem("alreadyLiked");
    }
    setlikeStatus(()=>likeOption)
  }, [likeOption]);
  // injection of packages

  // useStates
  const [commentText, setcommentText] = useState("");

  //variables
  const toastOption = {
    position: "top-center",
    theme: "colored",
  };

  const num = 8;

  const sendComment = () => {
    var detail = {
      text: commentText,
      timeStamp: new Date(),
      postId: params.query.newsFeed,
    };
    comment(detail)
      .then((res) => {
        console.log(res);
        if (res.statusText === "Created") {
          toast.success(`Comment added successfully`, toastOption);
          setcommentText("");
        } else {
          toast.error(`please check your internet`, toastOption);
        }
      })
      .catch((err) => {
        toast.error(`${err.messaege}`, toastOption);
      });
  };

  const like = () => {
    likeOption = !likeOption;
    setlikeStatus(()=>!likeOption)
    sessionStorage.setItem("alreadyLiked", !likeOption);
    const detail = {  postId: params.query.newsFeed, likeOption: !likeOption };
      likePost(detail).then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className={`container-fluid ${styles.body}`}>
        <div className="col-lg-11 mx-auto">
          <form></form>
          <section className="row">
            <aside className="col-md-8">
              <div className="p-2">
                <h3>Messi: Is the real goat</h3>
                <div className="">
                  <Image
                    src={require("../../assets/2.jpg")}
                    className={`${styles.newsImg}`}
                    alt="loading"
                  />
                </div>
                <div className="" style={{ textAlign: "justify" }}>
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
                <section
                  className={`rounded-4 d-flex gap-3 float-end ${styles.icon_container}`}
                >
                  <aside
                    className={`icon rounded-pill border p-2 d-flex align-items-center gap-3`}
                    style={{ cursor: "pointer" }}
                    onClick={like}
                  >
                  <FaRegThumbsUp size={`3vh`}/><span>0</span>
                  </aside>
                  <aside className="icon rounded-circle my-2"> <FaFacebook size={`3vh`} color={`blue`}/></aside>
                  <aside className="icon rounded-circle my-2"><FaWhatsapp size={`3vh`} color={`green`} /></aside>
                  <aside className="icon rounded-circle my-2"><FaTwitter size={`3vh`} color={`blue`} /></aside>
                </section>
              </div>
            </aside>
            <aside className="col-lg-4 col-md-12  mt-5">
              <div>
                <h6>Comment</h6>
                <div className="rounded-3 bg-secondary">
                  <section className="p-2 comment-section ">
                    <div
                      style={{
                        height: "20rem",
                        width: "100%",
                        overflow: "auto",
                      }}
                    >
                      {Array(num)
                        .fill("Comment")
                        .map((item, id) => {
                          return (
                            <div
                              className="rounded-3 bg-danger border p-2 my-1"
                              key={id}
                            >
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
                        onChange={(e) => setcommentText(e.target.value)}
                        value={commentText}
                      />
                      <button
                        type="button"
                        className={`rounded-3 btn btn-primary col-12 ${
                          !!!commentText && "disabled"
                        }`}
                        onClick={sendComment}
                      >
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
                        <div key={index}>
                          <section className="d-flex border-bottom my-2 ">
                            <Image
                              src={require("../../assets/1.jpg")}
                              width={100}
                              height={100}
                              alt="loading"
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

export async function getServerSideProps(context){
  let res = await axios.get(`${host}/posts/${context.query.newsFeed}`)
  let data = await res
  // console.log(context)
  return {
    props: {
      data: data.data
    }
  }
}
