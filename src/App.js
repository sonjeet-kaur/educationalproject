import './App.css';
// import "./scss/Style.scss";
import HomePage from './Home';
import NavBarLink from './NavBarLink';
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import Map from "./Map";
import Pages from './Pages';
import Order from './Order';
import { ToastContainer } from 'react-toastify';
import Login from './Components/Login';
import About from './About';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Card from './Components/Card';

function App() {
  const [authChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    let checkAuth = localStorage.getItem('auth')
    setIsAuthChecked(checkAuth);
  }, []);

  return (
    <>
      <Outlet />
      <NavBarLink />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/map" element={<Map />} />
          <Route exact path="/pages" element={<Pages />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}

      <ToastContainer
        autoClose={2000}
      />
    </>
  );
}

export default App;
