

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
import CQRS2Image from './../../assets/images/CQRS2.jpg';
import repositoryImage from './../../assets/images/repository-pattern.png';
import dotNetcoreImage from './../../assets/images/.net-core.png';
import cSharpImage from './../../assets/images/c-sharp.png';
import yarpApiImage from './../../assets/images/yarp-api.png';
import graphqlIMage from './../../assets/images/graphql.png';
import consolAppImage from './../../assets/images/consol-app.png';
import adoNetImage from './../../assets/images/Adonet.webp';
import linqImage from './../../assets/images/linq-logo.png';
import visualStudioImage from './../../assets/images/visual-studio.svg';
import VSCodeImage from './../../assets/images/visual-studio-code.svg';
import gitImage from './../../assets/images/github.svg';
import DatadogImage from './../../assets/images/Datadog.svg';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPostgresql } from "@fortawesome/free-brands-svg-icons";


export default function Skills() {


  return (
    <>
      <section className="skills overflow-hidden" id="skills">
        <h5 className="primary-heading">Skills</h5>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="400">
              <div className="skill-box">
                <h3>Frontend Development & Design Patterns</h3>
                <ul className="skill-list">
                  <li>
                    <img src={javascriptImage} alt="Javascript  " />
                    <h5> Javascript</h5>
                  </li>
                  <li>
                    <img src={jqueryImage} alt="JQuery" />
                    <h5> JQuery</h5>
                  </li>
                  <li>
                    <img src={ajaxImage} alt="Ajax" />
                    <h5>
                      Ajax</h5>
                  </li>

                  <li>
                    <img src={angularImage} alt="Angular" />
                    <h5> Angular</h5>
                  </li>
                  <li>
                    <img src={HtmlImage} alt="HTML" />
                    <h5> HTML</h5>
                  </li>
                  <li>
                    <img src={CQRS2Image} alt="CQRS2" />
                    <h5> CQRS2</h5>
                  </li>


                  <li>
                    <img src={repositoryImage} alt="Repository Pattern" />
                    <h5> Repository Pattern</h5>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="skill-box">
                <h3>Backend Development</h3>
                <ul className="skill-list">
                  <li>
                    <img src={dotNetcoreImage} alt=".NET Core" />
                    <h5> Asp .NET Core</h5>
                  </li>
                  <li>
                    <img src={dotnetImage} alt="Asp .Net Framework(MVC)" />
                    <h5> Asp .Net Framework(MVC)</h5>
                  </li>
                  <li>
                    <img src={apiImage} alt="Web API" />
                    <h5> Web API</h5>
                  </li>
                  <li>
                    <img src={cSharpImage} alt="C#" />
                    <h5> C#</h5>
                  </li>
                  <li>
                    <img src={yarpApiImage} alt="YARP API" />
                    <h5> Yarp (Api Gateway)</h5>
                  </li>
                  <li>
                    <img src={graphqlIMage} alt="Graphql" />
                    <h5> Graphql</h5>
                  </li>
                  <li>
                    <img src={consolAppImage} alt="Console App " />
                    <h5> Console App</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="400">
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
                  {/* <li>
                      <img src={dapperImage} alt="Dapper" />
                      <h5> Dapper</h5>
                    </li> */}
                  <li>
                    <img src={adoNetImage} alt="ADO.NET" />
                    <h5> ADO.NET</h5>
                  </li>
                  <li>
                    <img src={linqImage} alt="LINQ" />
                    <h5> LINQ</h5>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPostgresql} />
                    <h5>
                      PostgresSql</h5>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <div className="skill-box">
                <h3>ORM & Database</h3>
                <ul className="skill-list">
                  <li>
                    <img src={visualStudioImage} alt="Visual Studio" />
                    <h5> Visual Studio</h5>
                  </li>
                  <li>
                    <img src={VSCodeImage} alt="VS Code" />
                    <h5> Visual Studio Code</h5>
                  </li>
                  <li>
                    <img src={gitImage} alt="Git" />
                    <h5> Git</h5>
                  </li>
                  <li>
                    <img src={DatadogImage} alt="Datadog" />
                    <h5> Data Dog (for logging)</h5>
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