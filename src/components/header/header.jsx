import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


import "./header.scss";
import DownloadResumeButton from "../DownloadResumeButton";
export default function Header() {
  const logo = "Khushi Gupta";


  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav class="navbar navbar-expand-lg">
                <div class="menu-container">
                  {/* <a href="#" className="navbar-brand">{logo}</a> */}
                  <a href="#" className="navbar-brand">ss</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                         <a href="#" className="nav-link">Home</a>
                       
                      </li>

                      <li className="nav-item">
                         <a href="#aboutme" className="nav-link">About</a>
                      </li>
                      <li className="nav-item">
                         <a href="#skills" className="nav-link">Skills</a>
                      </li>
                      <li className="nav-item">
                        <a href="#projects" className="nav-link">Projects</a>
                     
                      </li>
                      <li className="nav-item">
                        <a href="#contactus" className="nav-link">Contact</a>
                      </li>
                      
                    </ul>
                    
                  {/* <div className="download-resume ms-3">
                    <DownloadResumeButton />
                  </div> */}
                  </div>

                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}