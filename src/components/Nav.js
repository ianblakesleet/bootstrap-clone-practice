import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
            alt="logo"
            width="150px"
            height="40px"
          />
        </a>
        <div className="navbar-nav ms-auto ">
          <a className="nav-item nav-link active" href="#">
            SERVICES
          </a>
          <a className="nav-item nav-link" href="#">
            PORTFOLIO
          </a>
          <a className="nav-item nav-link" href="#">
            ABOUT
          </a>
          <a className="nav-item nav-link" href="#">
            TEAM
          </a>
          <a className="nav-item nav-link" href="#">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
