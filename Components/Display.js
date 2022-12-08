import React, { useEffect, useState } from "react";
import style from "../styles/Display.module.css";
import { FaTrashAlt, FaPenAlt } from "react-icons/fa";
function Display({ allTodoItem, editFunction, deleteFunction }) {
  const [currentIndex, setcurrentIndex] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const modalEditOut = (index) => {
    
    settitle(allTodoItem[index]["title"]);

    setdesc(allTodoItem[index]["desc"]);

    setcurrentIndex(index);

  };

  const modalDltOut = (index) => {
    setcurrentIndex(index);
  };

  const updatedDetail = { title, desc, currentIndex };
  return (
    <>
      <div className="container col-sm-6 mx-auto shadow my-3 py-1">
        {allTodoItem.length ? (
          <table className="table table-striped text-center table-bordere table-responnsive-sm table-hover">
            <tr>
              <th>S/N</th>
              <th>Title</th>
              <th>Description</th>
              <th>Menu</th>
            </tr>
            {allTodoItem.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{todo.title}</td>
                <td>{todo.desc}</td>
                <td>
                  <span>
                    <button
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => modalEditOut(index)}
                    >
                      <FaPenAlt />
                    </button>
                  </span>
                  <span>
                    <button
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#modalExample"
                      onClick={() => modalDltOut(index)}
                    >
                      <FaTrashAlt />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <h1 className={style.noItem_found}>No Item Created!</h1>
        )}

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Todo Item
                </h5>
              </div>
              <div className="modal-body">
                <div className="form">
                  <div className="form-floating my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      onChange={(e) => settitle(e.target.value)}
                      value={title}
                    />
                    <label htmlFor="">Title</label>
                  </div>
                  <div className="form-floating my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Desc"
                      onChange={(e) => setdesc(e.target.value)}
                      value={desc}
                    />
                    <label htmlFor="">Description</label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={() => editFunction(updatedDetail)}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="modalExample"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"></h5>
              </div>
              <div className="modal-body text-center">
                <p className="fw-bold">
                  Are You sure to <i className="text-danger">PERMANENTLY</i> delete this <i className="text-danger">item</i> <span className="fs-2">?</span>
                </p>
              </div> 
              <div className={style.modal_footer}>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => deleteFunction(currentIndex)}
                >
                  100% sure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
