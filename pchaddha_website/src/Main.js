import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import {Route, NavLink, HashRouter, useHistory} from "react-router-dom";
import Resume from "./Resume";
import Poems from "./Poems";
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
          {/* <p> Welcome to Parmandeep Chaddha's Website </p> */}
        </div>
      </body>
    </div>
    </>
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
            <li onClick = {() => setActivePage("home")}
                className = {active_page === "home" ? "navbar-active" : "navbar-inactive"}>
              <NavLink exact to="/">
                <form> 
                  <input
                    type = "submit"
                    value = "Home" />
                </form>
              </NavLink>
            </li>
            <li onClick = {() => setActivePage("resume")}
              className = {active_page === "resume" ? "navbar-active" : "navbar-inactive"}>
              <NavLink to="/resume">
              <form> 
                  <input
                    type = "submit"
                    value = "Resume" />
                </form>
              </NavLink>
            </li>
            <li onClick = {() => setActivePage("poems")}
              className = {active_page === "poems" ? "navbar-active" : "navbar-inactive"}>
              <NavLink to="/poems">
              <form> 
                  <input
                    type = "submit"
                    value = "Selected Poems" />
                </form>
              </NavLink>
            </li>
            <li onClick = {() => setActivePage("podcast")}
              className = {active_page === "Podcast" ? "navbar-active" : "navbar-inactive"}>
              <NavLink to="/podcast">
              <form> 
                  <input
                    type = "submit"
                    value = "Class In Session Podcast" />
                </form>
              </NavLink>
            </li>
            <li onClick = {() => setActivePage("projects")}
              className = {active_page === "projects" ? "navbar-active" : "navbar-inactive"}>
              <NavLink to="/projects">
              <form> 
                  <input
                    type = "submit"
                    value = "Projects" />
                </form>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className = "main-component">
        <Route exact path  = "/" component = {Home}/>
        <Route path = "/resume" component = {Resume}/> 
        <Route path = "/poems" component = {Poems}/> 
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
