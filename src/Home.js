import React from 'react';
import codingMainImg from "./Images/coding-first-img.jpeg";
import htmlBook from "./Images/html-book.avif";
import htmlDevloper from "./Images/html-devloper.jpeg";
import cssDeveloper from "./Images/css-developer.jpeg";
import jsDeveloper from "./Images/js-developer.jpeg";
import reactDeveloper from "./Images/react-developer.jpeg";
import phpDeveloper from "./Images/php-developer.jpeg";
import netDeveloper from "./Images/net-developer.jpeg";
import cssBook from "./Images/css-book.avif";
import jsBoook from "./Images/js-book.jpeg";
import reactBook from "./Images/react-book.jpeg";
import phpBook from "./Images/php-book.jpeg";
import netBook from "./Images/net-book.jpeg";
import logoimage from "./Images/logoimage.jpeg";
import 'react-toastify/dist/ReactToastify.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
function HomePage() {


  const [fillHeartColor, setFillHeartColor] = useState(0);

  const OnHeartIcon = (val) => {
    setFillHeartColor(val);
  }

  return (
    <>
      <div className="custom_container vsm">
        <div className='row first-content-div'>
          <div className="col-lg-6 col-sm-6 col-md-6 contentDiv">
            Coding creates a set of instructions for computers to follow.
            These instructions determine what actions a computer can and cannot take.
            Coding allows programmers to build programs, such as websites and apps.
            Computer programmers can also tell computers how to process data in better,
            faster ways.
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6 imagediv">
            <img src={codingMainImg} className="upper-image" />
          </div>
        </div>
      </div>

      <div className="editordiv">
        Differernt- Different languages of computer
      </div>
      <div className="custom_container vsm">
        <div className='row lang-cardrow'>
          <div className='col-lg-4 col-sm-6 margin-b'>
            <div className="card cardInline">
              <img src={htmlBook} className='html-book' />
              <div className='cardbody'>
                <div className='heartmaindiv'>
                  <div className='high-div'>
                    <span className=''>Info about developer</span>
                  </div>
                  <div className='hearticondiv' onClick={() => OnHeartIcon(1)}>
                    {fillHeartColor === 1 ? <FavoriteIcon className='heartfill' /> : <FavoriteBorderIcon />}
                  </div>
                </div>
                <div className='maincardcontentdiv'>
                  <div className='maincontent-pricediv'>
                    <div className='cardcontent-maindiv'>
                      <div className='cardcontent'>
                        <img src={htmlDevloper} />
                      </div>
                      <div className='content'>
                        <div className="inner-content">
                          <a>
                            Tim Berners-Lee
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='pricemaindiv'>

                        <div className='content flex'>
                          <div className='text  pricealignment' style={{ display: 'flex' }}>
                            <span className='pricespan'>Current Version</span>
                          </div>
                          <div className="price-value">
                            <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>HTML5</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-buttondiv">
                  <div className="card-button">
                    <button type="button" className="btn btn-primary btn-md placebtn" >
                      <a className="short-card-profilename" href="https://en.wikipedia.org/wiki/HTML">Read More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-sm-6 margin-b'>
            <div className="card cardInline" >
              <img className="card-img-top css-book" src={cssBook} />
              <div className='cardbody'>
                <div className='heartmaindiv'>
                  <div className='high-div'>
                    <span>Info about developer</span>
                  </div>
                  <div className='hearticondiv' onClick={() => OnHeartIcon(2)}>
                    {fillHeartColor === 2 ? <FavoriteIcon className='heartfill' /> : <FavoriteBorderIcon />}
                  </div>
                </div>
                <div className='maincardcontentdiv'>
                  <div className='maincontent-pricediv'>
                    <div className='cardcontent-maindiv'>
                      <div className='cardcontent'>
                        <img src={cssDeveloper} />
                      </div>
                      <div className='content'>
                        <div className="inner-content">
                          <a>
                            Håkon Wium Lie
                          </a>
                        </div>
                        <div className="company-name">
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='pricemaindiv'>
                        <div className='content flex'>
                          <div className='text  pricealignment' style={{ display: 'flex' }}>
                            <span className='pricespan'>Current Version</span>
                          </div>
                          <div className="price-value">
                            <h5 style={{ fontSize: '14px', marginLeft: '42px' }}> CSS3</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-buttondiv">
                  <div className="card-button">
                    <button type="button" className="btn btn-primary btn-md placebtn" >
                      <a className="short-card-profilename" href={"https://en.wikipedia.org/wiki/CSS"}>Read More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 margin-b'>
            <div className="card cardInline" >
              <img className="card-img-top js-dev-profile js-book" src={jsBoook} />
            </div>
            <div className='cardbody'>
              <div className='heartmaindiv'>
                <div className='high-div'>
                  <span className='text'>Info about developer</span>
                </div>
                <div className='hearticondiv' onClick={() => OnHeartIcon(3)}>
                  {fillHeartColor === 3 ? <FavoriteIcon className='heartfill' /> : <FavoriteBorderIcon />}
                </div>
              </div>
              <div className='maincardcontentdiv'>
                <div className='maincontent-pricediv'>
                  <div className='cardcontent-maindiv'>
                    <div className='cardcontent'>
                      <img src={jsDeveloper} />
                    </div>
                    <div className='content'>
                      <div className='text' style={{ display: 'flex' }}>
                        <a className='js-dev-name'>
                          Brendan Eich
                        </a>
                      </div>
                      <div className='text'>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='pricemaindiv'>
                      <div className='content flex'>
                        <div className='text  pricealignment' style={{ display: 'flex' }}>
                          <span className='pricespan'>Current Version</span>
                        </div>
                        <div className="price-value">
                          <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>ECMAScript 2023</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-buttondiv">
                <div className="card-button">
                  <button type="button" className="btn btn-primary btn-md placebtn" >
                    <a className="short-card-profilename" href='https://en.wikipedia.org/wiki/JS'>Read More</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 margin-b'>
            <div className="card cardInline">
              <img className="card-img-top react-book" src={reactBook} />
            </div>
            <div className='cardbody'>
              <div className='heartmaindiv'>
                <div className='high-div'>
                  <span>Info about developer</span>
                </div>
                <div className='hearticondiv' onClick={() => OnHeartIcon(4)}>
                  {fillHeartColor === 4 ? <FavoriteIcon className='heartfill' /> : <FavoriteBorderIcon />}
                </div>
              </div>
              <div className='maincardcontentdiv'>
                <div className='maincontent-pricediv'>
                  <div className='cardcontent-maindiv'>
                    <div className='cardcontent'>
                      <img src={reactDeveloper} />
                    </div>
                    <div className='content'>
                      <div className="inner-content">
                        <a>
                          Jordan Walke
                        </a>
                      </div>
                      <div className="company-name">
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='pricemaindiv'>
                      <div className='content flex'>
                        <div className='text  pricealignment' style={{ display: 'flex' }}>
                          <span className='pricespan'>Current Version</span>
                        </div>
                        <div className="price-value">
                          <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>React 18</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-buttondiv">
                <div className="card-button">
                  <button type="button" className="btn btn-primary btn-md placebtn">
                    <a className="short-card-profilename" href='https://en.wikipedia.org/wiki/React'>Read More</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 margin-b'>

            <div className="card cardInline" >
              <img className="card-img-top php-book" src={phpBook} />
            </div>
            <div className='cardbody'>
              <div className='heartmaindiv'>
                <div className='high-div'>
                  <span className='text'>Info about developer</span>
                </div>
                <div className='hearticondiv' onClick={() => OnHeartIcon(5)}>
                  {fillHeartColor === 5 ? <FavoriteIcon className='heartfill' /> : <FavoriteBorderIcon />}
                </div>
              </div>
              <div className='maincardcontentdiv'>

                <div className='maincontent-pricediv'>

                  <div className='cardcontent-maindiv'>

                    <div className='cardcontent'>
                      <img src={phpDeveloper} />
                    </div>
                    <div className='content'>
                      <div className='text' style={{ display: 'flex' }}>
                        <a>
                          Rasmus Lerdorf
                        </a>
                      </div>
                      <div className='text'>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='pricemaindiv'>
                      <div className='content flex'>
                        <div className='text  pricealignment' style={{ display: 'flex' }}>
                          <span className='pricespan'>Current Version</span>
                        </div>
                        <div className="price-value">
                          <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>8.2</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-buttondiv">
                <div className="card-button">
                  <button type="button" className="btn btn-primary btn-md placebtn" >
                    <a className="short-card-profilename" href='https://en.wikipedia.org/wiki/PHP'>Read More</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 margin-b'>
            <div className="card cardInline" >
              <img className="card-img-top net-book" src={netBook} />

              <div className='cardbody'>
                <div className='heartmaindiv'>
                  <div className='high-div'>
                    <span>Info about developer</span>
                  </div>
                  <div className='hearticondiv' onClick={() => OnHeartIcon(6)}>
                    {fillHeartColor === 6 ? <FavoriteIcon className='heartfill' /> : <FavoriteBorderIcon />}
                  </div>
                </div>
                <div className='maincardcontentdiv'>
                  <div className='maincontent-pricediv'>
                    <div className='cardcontent-maindiv'>
                      <div className='cardcontent'>
                        <img src={netDeveloper} />
                      </div>
                      <div className='content'>
                        <div className="inner-content">
                          <a>
                            Microsoft
                          </a>
                        </div>
                        <div className="company-name">
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className='pricemaindiv'>
                        <div className='content flex'>
                          <div className='text  pricealignment' style={{ display: 'flex' }}>
                            <span className='pricespan'>Current Version</span>
                          </div>
                          <div className="price-value">
                            <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>.NET 5</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-buttondiv">
                  <div className="card-button">
                    <button type="button" className="btn btn-primary btn-md placebtn" >
                      <a className='about-net' href='https://en.wikipedia.org/wiki/.net'>Read More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {*********************** Footer Section ********************** */}
      <div className="divider"></div>
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
                  <p className="contact">Call: 9465542034
                    <br />
                    E mail: sonjeet@mail.com
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
export default HomePage;