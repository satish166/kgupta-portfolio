
import "./homepage.scss";

import DownloadResumeButton from "../DownloadResumeButton";


import bannerImage from './../../assets/images/img-3.jpg';

import SliderComponent from "../slider/SliderComponent";
import ContactUs from "../contact-us/contact-us";
import AboutMe from "../about-me/about";
import Skills from "../skills/skills";
import Projects from "../projects/projects";


export default function Homepage() {

  return (
    <>
      <div className="homepage">
        <section className="main-banner" data-aos="fade-up" data-aos-delay="300">
          <div className="banner-image">
            <img src={bannerImage} alt="Banner" />
          </div>
          <div className="banner-content">
            <h1 className="mb-3" data-aos="fade-up" data-aos-delay="400">Hi, I'm <span className="color-primary">Khushi Gupta</span></h1>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="500"> .Net Full Stack Developer</p>
            <div className="action" data-aos="fade-up" data-aos-delay="550">
              <DownloadResumeButton />
            </div>
            {/* <a href="#" className="btn btn-primary">View My Work</a> */}
          </div>
        </section>

        <AboutMe />

        <Skills />

        <Projects />

        <ContactUs />


      </div>
    </>
  );
}