

import "./skills.scss";

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


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPostgresql } from "@fortawesome/free-brands-svg-icons";


export default function Skills() {


  return (
    <>
    <section className="skills overflow-hidden" id="skills">
          <h5 className="primary-heading">Skills</h5>

          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4" data-aos="fade-right" data-aos-delay="400">
                <div className="skill-box">
                  <h3>Frontend Development</h3>
                  <ul className="skill-list">
                    <li>
                      <img src={javascriptImage} alt="Next.js" />
                      <h5> Javascript</h5>
                    </li>
                    {/* <li>
                      <img src={nextjsImage} alt="Next.js" />
                      <h5> Next JS</h5>
                    </li> */}
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
              <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
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
              <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-delay="400">
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
    </>
  );
}