import React from 'react';
import GoogleMapReact from 'google-map-react';
import logoimage from "./Images/logoimage.jpeg";
function Admin() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
      <div className='custom_container'>
        <div className='row'>
          <h1 className='map-h1'>
            Places of software development on map
          </h1>
          <div className='google-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13801.532265566608!2d74.18960779638078!3d30.140462254661138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sabohar%20software%20development%20institutes%20and%20company&#39;s!5e0!3m2!1sen!2sin!4v1686888605814!5m2!1sen!2sin" style={{ width: "600", height: "450", border: "0px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      > */}
          {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
          {/* </GoogleMapReact>
    </div> */}

          {/* </div> */}
        </div>
      </div>


      {/************************ Footer Section **********************/}
      <div className="divider"></div>
      {/* <div className="footer-div">
        <div className="custom_container">
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
      </div> */}
    </>
  )
}
export default Admin;