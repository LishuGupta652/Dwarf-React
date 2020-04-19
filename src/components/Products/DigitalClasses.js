import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const DigitalClasses = () => {
  return (
    <div>
      <Header backgroundColor="#60a3bc">
        <h1 className="text-black">Digital Classes</h1>
        <ol className="head-list">
          <a href="#What_are_digital">
            <li>What are DigitalClasses ?</li>
          </a>
          <a href="#Outcomes">
            <li>Outcome for the Educator and Learner.</li>
          </a>
          <a href="#Tools">
            <li>Portable Interactive tools</li>
          </a>
          <a href="#Implementation">
            <li>Implementation Methodology</li>
          </a>
          <a href="#Way_forward">
            <li>Way Forward</li>
          </a>
        </ol>
      </Header>

      <div className="content-wrapper" id="What_are_digital">
        <section>
          <h1>What are Digital Classrooms?</h1>
          <ScrollAnimation animateIn="fadeIn">
            <p>
              The Digital classroom is a "Technology-enabled" learning
              environment where Student learning and Interaction with the
              Teacher and Peers is fully supported through strategic use of
              Information and Communication Technology (ICT). Some of the core
              benefits of the Digital Classroom Solutions are as follows:
            </p>
          </ScrollAnimation>
          <ul>
            <ScrollAnimation animateIn="fadeIn">
              <section>
                <li>Empower Teachers and Students using Modern ICT tools</li>
                <li>
                  Developing future skills in students such as critical
                  thinking, creativity and communication
                </li>
                <li>
                  Creating a unique platform for Teachers to think out of the
                  box and built concept development skills
                </li>
                <li>
                  Stimulate mind of Students to explore and understand real life
                  application of Math’s, Science and other subject concepts.
                </li>
              </section>
            </ScrollAnimation>
          </ul>
        </section>
      </div>

      <div className="content-image ">
        <img
          src={require("../../images/products/elearning/learn2.jpeg")}
          alt="StayHome"
        />
      </div>

      <div className="content-wrapper" id="Outcomes">
        <section>
          <h1>Outcome for the Educator and Learner.</h1>

          <section>
            <table id="table-dc">
              <tr>
                <th>Educators</th>
                <th>Learners</th>
              </tr>
              <tr>
                <td>• Improved Technology Skills</td>
                <td>• Improved learning levels</td>
              </tr>
              <tr>
                <td>
                  • New method to teach subjects with the help of Multimedia
                  Content
                </td>
                <td>• Easier understanding of difficult concepts</td>
              </tr>
              <tr>
                <td>• Effective use of new tools</td>
                <td>• Increased interest levels in attending School</td>
              </tr>
              <tr>
                <td>
                  • Classroom Management Skills for effective teaching &
                  learning
                </td>
                <td></td>
              </tr>
            </table>
          </section>
        </section>
      </div>

      <div className="content-wrapper" id="Tools">
        <section>
          <h1>Portable Interactive tools </h1>
          <p>
            As an interactive learning platform, the Integrated community
            computer is Multiservice Device, which combines the functionality of
            the following components.{" "}
          </p>
          <ul>
            <section>
              <li>• High End Computer Systems</li>
              <li>• Large TV Screen</li>
              <li>• Embedded High Audio System</li>
              <li>• High Speed Internet Connectivity</li>
              <li>• Personal Hand Sets.</li>
              <li>• Router for the fast Wi-Fi</li>
              <li>• Virtual Digital Boards</li>
            </section>
          </ul>
        </section>
      </div>

      <div className="content-wrapper" id="Implementation">
        <section>
          <h1>Implementation Methodology </h1>
          <section>
            <table id="table-dc">
              <tr>
                <th>Pre Project Activities</th>
                <th>It Infrastructures</th>
                <th>Quality Initiatives</th>
                <th>Monitoring</th>
              </tr>
              <tr>
                <td>• Base Line Survey</td>
                <td>• Classrooms Installations</td>
                <td>• Subject Specified Content</td>
                <td>• Setting up centralize project control rooms.</td>
              </tr>
              <tr>
                <td>• Teacher Competency</td>
                <td>• Onsite Maintainance</td>
                <td>• Capacitive Building Teacher</td>
                <td>• Resort generation and submissions.</td>
              </tr>
              <tr>
                <td>• Students Knowledge and Skills.</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </section>
        </section>
      </div>

      <div className="content-wrapper" id="Way_forward">
        <section>
          <h1>Way Forward</h1>
          <section>
            <ul>
              <li>• Approval for the Project solution by client</li>
              <li>• Implementation Order</li>
              <li>• Handover of the school</li>
              <li>• Delivery Plan and Implementation</li>
              <li>
                • Formation of Core team for Project Management and Department
              </li>
            </ul>
          </section>
        </section>
      </div>

      <section>
        <div className="content-wrapper">
          <h1>OTHER SERVICES </h1>
        </div>
        <Link to="/products/smart_library">
          <div className="products">
            <div className="card">
              <div className="wrapper">
                <h3>
                  Smart Library
                  <span>
                    <i
                      className="fa fa-arrow-circle-o-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/products/health_center">
          <div className="products">
            <div className="card">
              <div className="wrapper">
                <h3>
                  Health Center
                  <span>
                    <i
                      className="fa fa-arrow-circle-o-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default DigitalClasses;
