

import "./about.scss";

import kIMage from "../../assets/images/k-image-1.jpg";

export default function AboutMe() {


  return (
    <>
     <section className="about-me overflow-hidden" id="aboutme" data-aos="fade-up" data-aos-delay="400">
              <h5 className="primary-heading" data-aos="fade-down" data-aos-delay="400">About</h5>
    
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                    <div className="image">
                      {/* <img src={kIMage} alt="About Me" /> */}
                    </div>
                  </div>
                  <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                    <div className="content">
                      {/* <h3>Hey, My Name is <span className="color-primary">Khushi Gupta</span></h3> */}
                      <p>Motivated .NET Developer with 1.4 years of experience in building full‑stack web applications using .NET, Angular, and modern JavaScript. Skilled in RESTful APIs, Entity Framework, Dapper, and database-driven solutions.</p>
                      <ul className="personal-details">
                        <li data-aos="fade-up" data-aos-delay="400"><p className="font-semibold">Birthday: <span>03 Feb 2002</span></p></li>
                        <li data-aos="fade-up" data-aos-delay="500"><p className="font-semibold">Phone: <span>+91 8791353307</span></p></li>
                        <li data-aos="fade-up" data-aos-delay="600"><p className="font-semibold">Email: <span>kg611409@gmail.com</span></p></li>
                        <li data-aos="fade-up" data-aos-delay="700"><p className="font-semibold">Age: <span>24 Years</span></p></li>
                        <li data-aos="fade-up" data-aos-delay="800"><p className="font-semibold">Degree: <span>Master of Computer Application</span></p></li>
                        <li data-aos="fade-up" data-aos-delay="900"><p className="font-semibold">Address: <span>Mohali, India</span></p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  );
}