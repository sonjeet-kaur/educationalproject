import React from "react";
import all_lans from "./Images/all-langs.avif";
import logoimage from "./Images/logoimage.jpeg";
function About() {

  return (
    <>
      <div className="custom_container all-lang-container vsm">
        <div className="row">
          <div className="col-12 col-sm-12 main-img">
            <img src={all_lans}></img>

          </div>
          <div className="background-image-about">
            <article>
              <h2 className="defination-maindiv">
                Defination of Programming Language?
              </h2>
              <p className="defination">
                A programming language is a way for programmers (developers) to communicate with computers.
                Programming languages consist of a set of rules that allows string values to be converted into various ways of generating machine code,
                or, in the case of visual programming languages, graphical elements.
              </p>
            </article>
            <article>
              <h2 className="defination-maindiv">
                Major Types of Programming Languages
              </h2>
              <h3 className="inner-defination">
                Procedural Programming Languages
              </h3>
              <p className="inner-defination-para">
                In the procedural programming, the program is divided into functions or procedures.
                They are primarily insular sub-programs that perform a specific task.
                These procedures can be called from other program parts, allowing for flexible programming
                and code reuse. The procedural programming create the procedure for execute any program.
                And showing needed output.
              </p>
              <h3 className="inner-defination">
                Functional Programming Languages
              </h3>
              <p className="inner-defination-para">
                Functional programming makes programs easier and increases their reliability.
                The functions operate on their input arguments. They are less popular,
                but they have experienced a many things with the educational point of view.
                They are assigned to variables, passed as arguments to other functions and return results
                from other functions.
              </p>
              <h3 className="inner-defination">
                Object-oriented Programming Languages
              </h3>
              <p className="inner-defination-para">
                In an object-oriented programming language, objects define the data and the behavior of objects.
                These objects typically include data attributes representing the object's state and method.
                This language enables users to make a complex system with interconnected objects.
                With object we store many data in one object and use those data with property (.) with object.
              </p>
              <h2 className="defination-maindiv">
                Other Ways to Classify Programming Languages
              </h2>
              <h3 className="inner-defination">
                Front-end vs. Back-end Languages
              </h3>
              <p className="inner-defination-para">
                Front-end languages are called client-side languages,
                which are used to create virtual and interactive website elements that users can see.
                The front-end languages include HTML, CSS and JavaScript.
              </p>

              <p className="inner-defination-para">
                Backend languages are known as server-side languages.
                They create logic and functionality behind the scenes of the website,
                like processing, storing and managing the user's account and authentication.
                Python, Ruby, and Java are some of the backend languages.
              </p>
            </article>
            <article>
              <h2 className="defination-maindiv">
                Benifits of learning coding
              </h2>
              <table className="table">
                <tbody>
                  <tr className="table-row">
                    <td className="table-heading">
                      <p>
                        Career Opportunities
                      </p>
                    </td>
                    <td>
                      <p>
                        employees with strong coding skills <br></br>are needed in healthcare,
                        <br></br>
                        education,
                        and the public sector <br></br> (government and social services) as well.
                      </p>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-heading">
                      <p>
                        Web developer
                      </p>
                    </td>
                    <td>
                      <p>
                        As e-commerce expands, more web developers <br></br>and digital designers will
                        <br></br>be needed to build and operate sites.
                      </p>
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="table-heading">
                      <p>
                        Improves Your Creativity Skills
                      </p>
                    </td>
                    <td>
                      <p>
                        Coding also encompasses much more than math;<br></br>
                        it requires an ability to <br></br>create and troubleshoot projects
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </article>
          </div>

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
export default About;