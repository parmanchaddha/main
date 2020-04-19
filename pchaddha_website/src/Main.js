import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {Route, NavLink, HashRouter, useHistory} from "react-router-dom";
import './Main.css';

function  Home () {
  return (
    <>
    <div className = "main-home"> 
      <header className="main-home">
        <h1>
          Parmandeep Chaddha
        </h1>
      </header>
      <body>
        <div>
          <p> Welcome to Parmandeep Chaddha's Website </p>
        </div>
      </body>
    </div>
    </>
  )
}

function Resume () {
  return (
    <h3> This is where the resume goes, yay! </h3>
  )
}

function MainPage () {
  const [active_page, setActivePage] = useState("Home")
  return (
    <>
    <HashRouter>
      <div className = "main-navbar">
        <div className = "navbar-image-container">
          <img 
            className = "navbar-image"
            src = "/portriat_floor.jpg"
            alt="san_fran_image" 
            />
        </div>
        <h4> Parmandeep Chaddha </h4>

        <div className = "main-navbar-anchors">          
          <ul> 
            <li onClick = {() => setActivePage("Home")}
                className = {active_page === "Home" ? "navbar-active" : "navbar-inactive"}>
              <NavLink exact to="/">
                <form> 
                  <input
                    type = "submit"
                    value = "Home" />
                </form>
              </NavLink>
            </li>
            <li onClick = {() => setActivePage("Resume")}
              className = {active_page === "Resume" ? "navbar-active" : "navbar-inactive"}>
              <NavLink to="/resume">
              <form> 
                  <input
                    type = "submit"
                    value = "Resume" />
                </form>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className = "main-component">
        <Route exact path  = "/" component = {Home}/>
        <Route path = "/resume" component = {Resume}/> 
      </div>
    </HashRouter>
    </>
  )
}

function Main () {
  return (
    <>
    <div className = "main-page"> 
      <MainPage/>
    </div>
    </>
  )
}

export default Main;
