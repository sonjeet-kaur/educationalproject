import React from "react";
import logoimage from "./Images/logoimage.jpeg";
import codestep from "./Images/code-stepbystep.jpeg";
import udemyimg from "./Images/Udemy-img.png";
import coursera from "./Images/coursera-img.jpeg";
import startlearn from "./Images/start-learn-logo.png";
function Pages() {
  return (
    <>
      <div className="custom_container all-lang-container vsm">
        <div className="row">
          <article>
            <h2 className="defination-maindiv">
              Info for learning coding through the websites and channels
            </h2>
            <p className="defination">
              On internet, there are many channels and websites for learning the coding.
              On some websites learning courses are paid and on some websites free courses are avaliable.
            </p>
          </article>
          <article>
            <h2 className="defination-maindiv">
              Examples are:
            </h2>
            <div className="code-step-maindiv">
              <div>
                <img src={codestep} className="code-step" />
              </div>
              <div className="code-para">
                <p className="defination para">
                  The, defination of code step by step is you learn each topic and language step by step like, start from begginning to end.
                  With coding step by step, we learn why we need to learn programming and what is the benifits of learn.
                  With the help of this channel, we learn different-differernt languages from scratch to advance.
                </p>
              </div>
            </div>
            <div className="code-step-maindiv">
              <div>
                <img src={udemyimg} className="code-step" />
              </div>
              <div className="code-para">
                <p className="defination para">
                  The name “Udemy” is a combination of the words “you” and “academy”.
                  As you can tell, Udemy is all about the education.
                  This is possible with the creation of courses by skilled and
                  expert instructors from around the world.
                  We, pay for the course which we want to learn and also some courses are free to learn.
                  User can gain the knowledge of each step with clearly.
                </p>
              </div>
            </div>
            <div className="code-step-maindiv">
              <div>
                <img src={coursera} className="code-step" />
              </div>
              <div className="code-para">
                <p className="defination para">
                  Coursera meaning is the global online learning platform that offers anyone,
                  anywhere access to online courses and degrees from world-class universities and companies.
                  Coursera is currently one of the world's largest online course and certificate program platforms.
                  This company offers a large repertoire of options for all types of users. You can take beginner or advanced programs.
                </p>
              </div>
            </div>
          </article>

          <article>
            <div className="startl-main">
              <div>
                <img src={startlearn} className="code-step"></img>
              </div>
              <div className="code-para">
                <h2 className="defination para">
                  You can use any channel for learn any language. These all are the best learning channnel of programming.
                  You normally write the name of channel on search bar and you see the results.
                  Then, you get all the detail of all courses of those channel and you can choose the course which you
                  want to learn.
                </h2>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/************************ Footer Section **********************/}
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
export default Pages;