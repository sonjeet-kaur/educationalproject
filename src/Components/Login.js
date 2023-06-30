import { Label } from "@fluentui/react";
import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login_img from "../Images/login.jpeg";
import logoimage from "../Images/logoimage.jpeg";
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import axios from "axios";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function reset() {
    setEmail("");
    setPassword("");
  }

  const LoginUser = async (e) => {
    e.preventDefault();
    let data = await axios.post("http://localhost:3000/profile", {

      email: email,
      password: password,
    })
    console.log('data', data.ok);
    if (data.status) {
      reset();
      toast("Submitted Successfully!");

      setTimeout(() => {
        navigate("/card");
      }, 2000);
      localStorage.setItem("auth", 'true');
    }
    else {
      toast("Something Went Wrong");
    }
  }

  return (
    <>

      <div className="custom_container vsm">
        <div className="row main-rowdiv">
          <div className="col-6">
            <div className="login-imgdiv">
              <img src={login_img}></img>
            </div>

          </div>

          <div className="form-div">
            <div className="form-maindiv">
              <div className="card login-cardmain ">
                <Form onSubmit={LoginUser} className="form toastClass" >
                  <Label className="field-label">Enter Email</Label>
                  <Form.Control className="inputfield" type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email}>
                  </Form.Control>
                  <Label className="field-label">Enter Password</Label>
                  <Form.Control className="inputfield" type={showPassword ? "text" : "password"} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password}>
                  </Form.Control>
                  <span className="pass-icon" onClick={() => { setShowPassword(!showPassword) }}>
                    {showPassword ?
                      <VisibilityTwoToneIcon /> :
                      <VisibilityOffTwoToneIcon />
                    }
                  </span>
                  <div className="btn-div" >
                    <button className="btn btn-outline-success create-btn login-btn" type="submit">Submit</button>

                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* *********************** Footer Section ********************** */}
      <div className="divider"></div>
      {/* <div className="footer-div">
        <div className="custom_container vsm">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="footer-inner-div">
                <div className='footer-logo-textdiv'>
                  <img src={logoimage} alt="Coreimage" className="logo-image logo" />
                  <p className="pragraph">This is the latest info of Computer and Information Technology Occupations.</p>
                </div>
              </div>
              <div className='for-contact'>
                <p>
                  For Contact:
                </p>
                <p className="contact">Call: 9465542034
                  <br />
                  E mail: sonjeet@mail.com
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="row">
                <div className="col-6 col-sm-4">
                  <div className="footer-right">
                    <h5 className="footer-ryt-first">Job Growth</h5>
                    <ul className="ul-footer-list">
                      <li className="footer-li-item">2020-2030</li>
                      <li className="footer-li-item">+13%</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="footer-right">
                    <h5 className="footer-ryt-first"> Median Salary </h5>
                    <ul className="ul-footer-list">
                      <li className="footer-li-item">2021</li>
                      <li className="footer-li-item">$97,430</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="footer-right">
                    <h5 className="footer-ryt-first"> New Jobs Yearly</h5>
                    <ul className="ul-footer-list">
                      <li className="footer-li-item">667,600</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}
export default Login;