import './App.css';
// import "./scss/Style.scss";
import HomePage from './Home';
import NavBarLink from './NavBarLink';
import { Route, Routes, BrowserRouter, Outlet, Router } from 'react-router-dom';
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

  function LoginLayout() {
    return (
      <>
        <NavBarLink />
        <Outlet />
        
      </>
    );
  }

  function PublicLayout() {
    return (
      <>
        <NavBarLink />
        <Outlet />
        < Footer />
        < Order />
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/card" element={<Card />} />
          </Route>

          <Route element={<PublicLayout />}>
            <Route path='/home' element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<Map />} />
            <Route path="/pages" element={<Pages />} />
            {/* <Route path="/order" element={<Order />} /> */}
          </Route>

        </Routes>
      </BrowserRouter>

      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
