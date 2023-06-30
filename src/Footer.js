import React from "react";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailIcon from '@mui/icons-material/Email';
import logoimage from "./Images/logoimage.jpeg";


export default function Footer() {
    return (
        <>
            <div className="footer-div">
                <div className="custom_container vsm">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <div className="footer-inner-div">
                                <div className='footer-logo-textdiv'>
                                    <img src={logoimage} alt="Coreimage" className="logo-image logo" />
                                    <p className="pragraph">This is the latest info of Computer and Information Technology Occupations.</p>
                                </div>
                                <div className='for-contact'>
                                    <p>
                                        For Contact:
                                    </p>
                                    <p className="contact"><CallOutlinedIcon/> Call  : 9465542034
                                        <br />
                                      <EmailIcon />  E mail: kaursonjeet75@mail.com
                                    </p>
                                </div>
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
            </div>
        </>
    )


}