import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logoimage from "./Images/logoimage.jpeg";
import contentimage from './Images/contentimage.png';
import { Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import About from './About';
import Map from "./Map";
import Pages from './Pages';
import axios from "axios";
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Login from "./Components/Login";

const NavbarLink = () => {

  // const navigate = useNavigate();

  const [theme, setTheme] = useState('dark');

  function headerToggleBtn() {
    var toggle = document.body;
    toggle.classList.add("header-show");
    console.log(toggle);
    // if(toggle.display === 'block') {
    //   toggle.display = 'none';
    // }
    // else {
    //   toggle.display = 'block';
    // }
  }

  let modeTheme = localStorage.getItem("mode");
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", `${modeTheme}`);
  }, [theme]);

  function modechange() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('mode', theme);
  }

  const checkAuth = localStorage.getItem('auth');

  const logout = async (e) => {
    // e.preventDefault();
    var data = await axios.get('http://localhost:3002/profile', {
    })
    if (checkAuth === 'true') {
      window.location.href = "/login";
      // <Login />
      // navigate("/login");
    }
    console.log(data);
  }
  return (
    <>
      {/* <div>
        <nav class="navbar">
          <ul>
            <li class="nav-item">
              <img src={logoimage} alt="Coreimage" style={{ height: '49px' }} />
            </li>
            <li>
              <a href="/">
                Home
              </a> 
            </li>
            <li>
              <a href="/explore">
                Explore
              </a> 
            </li>
            <li>
              <a href="/admin">
                Admin
              </a>
            </li>
            <li>
              <a href="/pages">
                Pages
              </a>
            </li>
          </ul>

          <div class="searchBox">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              {/* <button class="btn btn-outline-success" type="submit">Search</button>     */}

      {/* </form> */}
      {/* //     </div> */}

      {/* //     <div class="createbutton">
      //       <button class="btn btn-outline-success create-btn" type="submit">Create</button>
      //     </div>
      //   </nav> */}
      {/* // </div> */}

      <div className="headermain-div">
        <div>
          <ul className="header-list">
            <li className="site-image">
              <img src={logoimage} alt="Coreimage" className="logo" />
            </li>
            <li className="list-items">
              <a href="/home">
                Home
              </a>
            </li>
            <li className="list-items">
              <a href="/about">
                About
              </a>
            </li>
            <li className="list-items">
              <a href="/map">
                Map
              </a>
            </li>
            <li className="list-items">
              <a href="/pages">
                Pages
              </a>

            </li>
          </ul>

        </div>
        <div className="menu-icon" onClick={() => headerToggleBtn()}>
          <MenuIcon />
        </div>
        {/* <i onclick={headerToggleBtn}>
        </i> */}
        <div className="searchmain-div">
          <div className="search-div">
            {/* <button class="btn btn-outline-success create-btn" type="search">Search</button>  */}
            {/* <input type='text' placeholder='Search'  />
          <Link to="/"><SearchIcon /></Link> */}
          </div>

          <div className="main-btndiv">
            <div className="logbtn">
              <button className="btn btn-outline-success create-btn loginout-btn" type="submit" onClick={() => logout()}>LogOut
                {/* <a href="/login">Login</a> */}
              </button>
            </div>
            <div className="logbtn mode" onClick={() => modechange()}>
              {
                theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon className="light" />
              }

            </div>
          </div>
        </div>
      </div>





    </>
  )
}
export default NavbarLink;


