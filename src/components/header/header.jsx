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
                  <Link to="/" className="navbar-brand">{logo}</Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Home
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink to="/education" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Education
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Projects
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Contact
                        </NavLink>
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