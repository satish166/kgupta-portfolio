
import "./homepage.scss";

import DownloadResumeButton from "../DownloadResumeButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSass, faJs, faReact, faGithub, faAngular, faPostgresql } from "@fortawesome/free-brands-svg-icons";
import { faServer } from '@fortawesome/free-solid-svg-icons';
import bannerImage from './../../assets/images/img-3.jpg';
import javascriptImage from './../../assets/images/javascript.svg';
import HtmlImage from './../../assets/images/html-5.svg';
import reactImage from './../../assets/images/react.svg';
import dotnetImage from './../../assets/images/dotnet.svg';
import sqlserverImage from './../../assets/images/sql-server.svg';
import dapperImage from './../../assets/images/dapper.svg';
import angularImage from './../../assets/images/angular.svg';
import ajaxImage from './../../assets/images/ajax.svg';
import nextjsImage from './../../assets/images/next-dot.svg';
import entityframeworkImage from './../../assets/images/entityframework.png';
import apiImage from './../../assets/images/api.svg';
import jqueryImage from './../../assets/images/jquery.svg';


export default function Homepage() {

  return (
    <>
      <div className="homepage">
        <section className="main-banner">
          <div className="banner-image">
            <img src={bannerImage} alt="Banner" />
          </div>
          <div className="banner-content">
            <h1 className="mb-3">Hi, I'm <span className="color-primary">Khushi Gupta</span></h1>
            <p className="mb-4"> .Net Full Stack Developer</p>
            <div className="action">
              <DownloadResumeButton />
            </div>
            {/* <a href="#" className="btn btn-primary">View My Work</a> */}
          </div>
        </section>

        <section className="about-me">
          <h5 className="primary-heading">About</h5>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="image">
                  <img src="https://mohammedatefportfolio.vercel.app/img/2025.png" alt="About Me" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="content">
                  <h3>Hey, My Name is <span className="color-primary">Khushi Gupta</span></h3>
                  <p>Motivated .NET Developer with 1.4 years of experience in building full‑stack web applications using .NET, Angular, and modern JavaScript. Skilled in RESTful APIs, Entity Framework, Dapper, and database-driven solutions.</p>
                  <ul className="personal-details">
                    <li><p className="font-semibold">Birthday: <span>03 Feb 2002</span></p></li>
                    <li><p className="font-semibold">Phone: <span>+91 8791353307</span></p></li>
                    <li><p className="font-semibold">Email: <span>kg611409@gmail.com</span></p></li>
                    <li><p className="font-semibold">Age: <span>23</span></p></li>
                    <li><p className="font-semibold">Degree: <span>Master of Computer Application</span></p></li>
                    <li><p className="font-semibold">Address: <span>Mohali, India</span></p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="skills">
          <h5 className="primary-heading">Skills</h5>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="skill-box">
                  <h3>Frontend Development</h3>
                  <ul className="skill-list">
                    <li>
                      <img src={javascriptImage} alt="Next.js" />
                      <h5> Javascript</h5>
                    </li>
                    <li>
                      <img src={nextjsImage} alt="Next.js" />
                      <h5> Next JS</h5>
                    </li>
                    <li>
                      <img src={HtmlImage} alt="HTML" />
                      <h5> HTML</h5>
                    </li>
                    <li>
                      <img src={ajaxImage} alt="Ajax" />
                      <h5>
                        Ajax</h5>
                    </li>
                    <li>
                      <img src={jqueryImage} alt="JQuery" />
                      <h5> JQuery</h5>
                    </li>
                    <li>
                      <img src={angularImage} alt="Angular" />
                      <h5> Angular</h5>
                    </li>
                    <li>
                      <img src={reactImage} alt="React" />
                      <h5> React</h5>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="skill-box">
                  <h3>Backend Development</h3>
                  <ul className="skill-list">
                    <li>
                      <img src={dotnetImage} alt=".NET" />
                      <h5> .NET</h5>
                    </li>
                    <li>
                      <img src={apiImage} alt="Web API" />
                      <h5> Web API</h5>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="skill-box">
                  <h3>ORM & Database</h3>
                  <ul className="skill-list">
                    <li>
                      <img src={entityframeworkImage} alt="Entity Framework" />
                      <h5> Entity Framework</h5>
                    </li>
                    <li>
                     <img src={sqlserverImage} alt="SQL Server" />
                      <h5> SQL Server</h5>
                    </li>
                    <li>
                      <img src={dapperImage} alt="Dapper" />
                      <h5> Dapper</h5>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPostgresql} />
                      <h5>
                        PostgresSql</h5>
                    </li>

                  </ul>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
}