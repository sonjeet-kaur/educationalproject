
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import editor1 from "./Images/editor1.jpeg";
import editor2 from './Images/editor2.jpeg';
import editor3 from './Images/editor3.jpeg';
import editorprofile1 from './Images/editorprofile1.jpeg';
import editorprofile2 from './Images/editorprofile2.jpeg';
import secondsectionimage1 from './Images/secondsectionimage1.jpeg';
import './App.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default function SwiperSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <div class='container'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
    
        <SwiperSlide> 
        <div class='col-lg-3 col-sm-6 margin-b'>
          
            
            <div class="card cardInline">
              <img src={editor1} />
              <div class='cardbody'>
                <span class>Hightest bid 1.065 ETH</span>
                <span class="glyphicon glyphicon-heart-empty heart-icon"></span>
                <div class='maincardcontentdiv'>

                  <div class='cardcontent'>
                    <img src={editorprofile1} />

                  </div>
                  <div class='content'>
                    <div class="inner-content">
                      <a>
                        Cowboy Riding Bull Nature
                      </a>
                    </div>
                    <div class="company-name">
                      {/* <span>Current Bid</span> */}
                      <a class="short-card-profilename">@designing_world</a>
                    </div>
                  </div>
                  <div class='pricemaindiv'>
                    {/* <div >
      <a class="short-card-profilename">@designing_world</a>
      </div> */}
                    <div class='content'>
                      <div class='text  pricealignment' style={{ display: 'flex' }}>
                        <span class='pricespan'>Current Bid</span>
                      </div>
                      <div class="price-value">
                        <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>1.065 ETH</h5>
                      </div>

                    </div>

                  </div>


                  {/* <div>  <a>@affan</a></div> */}
                </div>
                <div class="main-buttondiv">
                  <div class="card-button">
                    <button type="button" class="btn btn-primary btn-md placebtn" >Place Bid</button>
                  </div>

                  <div class='activitydiv'>
                    <a style={{ textDecoration: 'none', color: '#c2d4f8', fontSize: '21px' }} href="#">Activity</a>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
              </SwiperSlide>
        <SwiperSlide> 
        <div class='col-lg-3 col-sm-6 margin-b'>
          
            
          <div class="card cardInline">
            <img src={editor1} />
            <div class='cardbody'>
              <span class>Hightest bid 1.065 ETH</span>
              <span class="glyphicon glyphicon-heart-empty heart-icon"></span>
              <div class='maincardcontentdiv'>

                <div class='cardcontent'>
                  <img src={editorprofile1} />

                </div>
                <div class='content'>
                  <div class="inner-content">
                    <a>
                      Cowboy Riding Bull Nature
                    </a>
                  </div>
                  <div class="company-name">
                    {/* <span>Current Bid</span> */}
                    <a class="short-card-profilename">@designing_world</a>
                  </div>
                </div>
                <div class='pricemaindiv'>
                  {/* <div >
    <a class="short-card-profilename">@designing_world</a>
    </div> */}
                  <div class='content'>
                    <div class='text  pricealignment' style={{ display: 'flex' }}>
                      <span class='pricespan'>Current Bid</span>
                    </div>
                    <div class="price-value">
                      <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>1.065 ETH</h5>
                    </div>

                  </div>

                </div>


                {/* <div>  <a>@affan</a></div> */}
              </div>
              <div class="main-buttondiv">
                <div class="card-button">
                  <button type="button" class="btn btn-primary btn-md placebtn" >Place Bid</button>
                </div>

                <div class='activitydiv'>
                  <a style={{ textDecoration: 'none', color: '#c2d4f8', fontSize: '21px' }} href="#">Activity</a>
                </div>
              </div>
            </div>
          </div>
    
        </div>
              </SwiperSlide>
        <SwiperSlide> 
        <div class='col-lg-3 col-sm-6 margin-b'>
          
            
          <div class="card cardInline">
            <img src={editor1} />
            <div class='cardbody'>
              <span class>Hightest bid 1.065 ETH</span>
              <span class="glyphicon glyphicon-heart-empty heart-icon"></span>
              <div class='maincardcontentdiv'>

                <div class='cardcontent'>
                  <img src={editorprofile1} />

                </div>
                <div class='content'>
                  <div class="inner-content">
                    <a>
                      Cowboy Riding Bull Nature
                    </a>
                  </div>
                  <div class="company-name">
                    {/* <span>Current Bid</span> */}
                    <a class="short-card-profilename">@designing_world</a>
                  </div>
                </div>
                <div class='pricemaindiv'>
                  {/* <div >
    <a class="short-card-profilename">@designing_world</a>
    </div> */}
                  <div class='content'>
                    <div class='text  pricealignment' style={{ display: 'flex' }}>
                      <span class='pricespan'>Current Bid</span>
                    </div>
                    <div class="price-value">
                      <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>1.065 ETH</h5>
                    </div>

                  </div>

                </div>


                {/* <div>  <a>@affan</a></div> */}
              </div>
              <div class="main-buttondiv">
                <div class="card-button">
                  <button type="button" class="btn btn-primary btn-md placebtn" >Place Bid</button>
                </div>

                <div class='activitydiv'>
                  <a style={{ textDecoration: 'none', color: '#c2d4f8', fontSize: '21px' }} href="#">Activity</a>
                </div>
              </div>
            </div>
          </div>
    
        </div>
              </SwiperSlide>
        <SwiperSlide> 
        <div class='col-lg-3 col-sm-6 margin-b'>
          
            
          <div class="card cardInline">
            <img src={editor1} />
            <div class='cardbody'>
              <span class>Hightest bid 1.065 ETH</span>
              <span class="glyphicon glyphicon-heart-empty heart-icon"></span>
              <div class='maincardcontentdiv'>

                <div class='cardcontent'>
                  <img src={editorprofile1} />

                </div>
                <div class='content'>
                  <div class="inner-content">
                    <a>
                      Cowboy Riding Bull Nature
                    </a>
                  </div>
                  <div class="company-name">
                    {/* <span>Current Bid</span> */}
                    <a class="short-card-profilename">@designing_world</a>
                  </div>
                </div>
                <div class='pricemaindiv'>
                  {/* <div >
    <a class="short-card-profilename">@designing_world</a>
    </div> */}
                  <div class='content'>
                    <div class='text  pricealignment' style={{ display: 'flex' }}>
                      <span class='pricespan'>Current Bid</span>
                    </div>
                    <div class="price-value">
                      <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>1.065 ETH</h5>
                    </div>

                  </div>

                </div>


                {/* <div>  <a>@affan</a></div> */}
              </div>
              <div class="main-buttondiv">
                <div class="card-button">
                  <button type="button" class="btn btn-primary btn-md placebtn" >Place Bid</button>
                </div>

                <div class='activitydiv'>
                  <a style={{ textDecoration: 'none', color: '#c2d4f8', fontSize: '21px' }} href="#">Activity</a>
                </div>
              </div>
            </div>
          </div>
    
        </div>
              </SwiperSlide>
        <SwiperSlide>
        <div class='col-lg-3 col-sm-6 margin-b'>
          
            
          <div class="card cardInline">
            <img src={editor1} />
            <div class='cardbody'>
              <span class>Hightest bid 1.065 ETH</span>
              <span class="glyphicon glyphicon-heart-empty heart-icon"></span>
              <div class='maincardcontentdiv'>

                <div class='cardcontent'>
                  <img src={editorprofile1} />

                </div>
                <div class='content'>
                  <div class="inner-content">
                    <a>
                      Cowboy Riding Bull Nature
                    </a>
                  </div>
                  <div class="company-name">
                    {/* <span>Current Bid</span> */}
                    <a class="short-card-profilename">@designing_world</a>
                  </div>
                </div>
                <div class='pricemaindiv'>
                  {/* <div >
    <a class="short-card-profilename">@designing_world</a>
    </div> */}
                  <div class='content'>
                    <div class='text  pricealignment' style={{ display: 'flex' }}>
                      <span class='pricespan'>Current Bid</span>
                    </div>
                    <div class="price-value">
                      <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>1.065 ETH</h5>
                    </div>

                  </div>

                </div>


                {/* <div>  <a>@affan</a></div> */}
              </div>
              <div class="main-buttondiv">
                <div class="card-button">
                  <button type="button" class="btn btn-primary btn-md placebtn" >Place Bid</button>
                </div>

                <div class='activitydiv'>
                  <a style={{ textDecoration: 'none', color: '#c2d4f8', fontSize: '21px' }} href="#">Activity</a>
                </div>
              </div>
            </div>
          </div>
    
        </div>
              </SwiperSlide>
        <SwiperSlide> 
        <div class='col-lg-3 col-sm-6 margin-b'>
          
            
          <div class="card cardInline">
            <img src={editor1} />
            <div class='cardbody'>
              <span class>Hightest bid 1.065 ETH</span>
              <span class="glyphicon glyphicon-heart-empty heart-icon"></span>
              <div class='maincardcontentdiv'>

                <div class='cardcontent'>
                  <img src={editorprofile1} />

                </div>
                <div class='content'>
                  <div class="inner-content">
                    <a>
                      Cowboy Riding Bull Nature
                    </a>
                  </div>
                  <div class="company-name">
                    {/* <span>Current Bid</span> */}
                    <a class="short-card-profilename">@designing_world</a>
                  </div>
                </div>
                <div class='pricemaindiv'>
                  {/* <div >
    <a class="short-card-profilename">@designing_world</a>
    </div> */}
                  <div class='content'>
                    <div class='text  pricealignment' style={{ display: 'flex' }}>
                      <span class='pricespan'>Current Bid</span>
                    </div>
                    <div class="price-value">
                      <h5 style={{ fontSize: '14px', marginLeft: '42px' }}>1.065 ETH</h5>
                    </div>

                  </div>

                </div>


                {/* <div>  <a>@affan</a></div> */}
              </div>
              <div class="main-buttondiv">
                <div class="card-button">
                  <button type="button" class="btn btn-primary btn-md placebtn" >Place Bid</button>
                </div>

                <div class='activitydiv'>
                  <a style={{ textDecoration: 'none', color: '#c2d4f8', fontSize: '21px' }} href="#">Activity</a>
                </div>
              </div>
            </div>
          </div>
    
        </div>
              </SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </>
  );
}

