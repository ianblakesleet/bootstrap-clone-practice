import React from 'react'

const Main = () => {
  return (
    <section
      className="container-fluid imageBg"
      style={{
        backgroundImage: `url("https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg")`,
        height: '685px',
        backgroundPosition: 'center',
      }}
    >
      <div className="p-5 text-center text-light ">
        <h4 className="m-5 display-5 ">Welcome To Our Studio!</h4>
        <h1 className="m-5 display-2">IT'S NICE TO MEET YOU</h1>
        <a className="btn btn-lg btn-warning text-light" href="" role="button">
          TELL ME MORE
        </a>
      </div>
    </section>
  )
}

export default Main
