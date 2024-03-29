import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary shadow-sm fixed-to bg-primayr bg-light px-lg-5">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Blog Site</Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-3 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" href="/newsPost">New Post</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar