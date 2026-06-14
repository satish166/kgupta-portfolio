'use client';

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./work.scss";

interface ProjectItem {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

interface WorkProps {
  projects: ProjectItem[];
}

const getProjectTechTags = (name: string): string[] => {
  const n = name.toLowerCase();
  if (n.includes("bazaar") || n.includes("insight")) {
    return ["ASP.NET Core", "GraphQL", "Angular 18", "PostgreSQL"];
  }
  if (n.includes("supply chain") || n.includes("lj supply")) {
    return ["ASP.NET Core", "Web API", "MS SQL", "Angular"];
  }
  if (n.includes("frame pricing") || n.includes("lj frame")) {
    return ["ASP.NET Core", "C#", "Web API", "Angular"];
  }
  if (n.includes("route sync") || n.includes("console")) {
    return ["ASP.NET Framework", "C#", "Console App", "AS400"];
  }
  return ["ASP.NET Core", "C#", "Web API", "Angular"];
};

export default function Work({ projects }: WorkProps) {
  const list = projects || [];
  const desktopSliderRef = useRef<Slider>(null);
  const mobileSliderRef = useRef<Slider>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (list.length === 0) return null;

  const desktopSettings = {
    dots: true,
    infinite: list.length > 2,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };

  const mobileSettings = {
    dots: true,
    infinite: list.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
  };

  // SSR / Hydration Fallback to prevent layout shifts & resolve Slick Slider responsiveness issues on actual devices
  if (!mounted) {
    return (
      <section className="work-section overflow-hidden" id="liveprojects">
        <div className="work-content container">
          <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
          <div className="work-section-header mb-4">
            <div className="d-flex align-items-center gap-2">
              <span className="cyber-sec-num">03 // </span>
              <h2 className="heading mb-0">Live Projects</h2>
            </div>
            <h6 className="section-subheading mt-2 mb-0">A showcase of production-ready web platforms built with robust frontend and backend technologies.</h6>
          </div>
          </div>

          <div className="row g-4 mt-4">
            {list.map((proj) => (
              <div className="col-12 col-lg-6 px-2 pb-3" key={proj.id}>
                <div className="project-card-wrapper">
                  <div className="browser-mockup glass-card">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                      </div>
                      <div className="browser-address-bar">
                        {proj.link.replace("https://", "").replace("www.", "").replace(/\/$/, "")}
                      </div>
                    </div>
                    
                    <div className="browser-body">
                      <div className="image-overlay-container">
                        <img src={proj.image || "/uploads/poppin.png"} alt={proj.name} className="browser-image" />
                        <div className="browser-hover-overlay">
                          <a href={proj.link} target="_blank" rel="noopener noreferrer" className="explore-btn">
                            Visit Live Site
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="project-details">
                      <div className="tags-container">
                        {getProjectTechTags(proj.name).map((tag, i) => (
                          <span className="tech-badge" key={i}>{tag}</span>
                        ))}
                      </div>
                      <h3 className="project-title">{proj.name}</h3>
                      <p className="project-description">{proj.description}</p>
                      <div className="action-row">
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="live-link">
                          <span>Launch Live Site</span>
                          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const renderCard = (proj: ProjectItem) => (
    <div className="project-card-wrapper">
      <div className="browser-mockup glass-card">
        {/* Browser Header / Title Bar */}
        <div className="browser-header">
          <div className="browser-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="browser-address-bar">
            {proj.link.replace("https://", "").replace("www.", "").replace(/\/$/, "")}
          </div>
        </div>
        
        {/* Browser Window Body */}
        <div className="browser-body">
          <div className="image-overlay-container">
            <img src={proj.image || "/uploads/poppin.png"} alt={proj.name} className="browser-image" />
            <div className="browser-hover-overlay">
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="explore-btn">
                Visit Live Site
              </a>
            </div>
          </div>
        </div>

        {/* Project Info Section */}
        <div className="project-details">
          <div className="tags-container">
            {getProjectTechTags(proj.name).map((tag, i) => (
              <span className="tech-badge" key={i}>{tag}</span>
            ))}
          </div>
          <h3 className="project-title">{proj.name}</h3>
          <p className="project-description">{proj.description}</p>
          <div className="action-row">
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="live-link">
              <span>Launch Live Site</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="work-section overflow-hidden" id="liveprojects">
        <div className="work-content container">
          <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
            <div className="work-section-header">
              <div className="d-flex align-items-center gap-2">
                <span className="cyber-sec-num">03 // </span>
                <h2 className="heading mb-0">Live Projects</h2>
              </div>
              <h6 className="section-subheading mt-2 mb-0">A showcase of production-ready web platforms built with robust frontend and backend technologies.</h6>
            </div>
            
            {/* Carousel Controls - Desktop */}
            {list.length > 2 && (
              <div className="carousel-controls-wrapper d-none d-lg-flex gap-2 mt-3 mt-md-0">
                <button 
                  className="ctrl-btn prev" 
                  type="button" 
                  onClick={() => desktopSliderRef.current?.slickPrev()} 
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '16px', height: '16px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button 
                  className="ctrl-btn next" 
                  type="button" 
                  onClick={() => desktopSliderRef.current?.slickNext()} 
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '16px', height: '16px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            )}

            {/* Carousel Controls - Mobile */}
            {list.length > 1 && (
              <div className="carousel-controls-wrapper d-flex d-lg-none gap-2 mt-3 mt-md-0">
                <button 
                  className="ctrl-btn prev" 
                  type="button" 
                  onClick={() => mobileSliderRef.current?.slickPrev()} 
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '16px', height: '16px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button 
                  className="ctrl-btn next" 
                  type="button" 
                  onClick={() => mobileSliderRef.current?.slickNext()} 
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '16px', height: '16px' }}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            )}
          </div>

          {/* Desktop Carousel (2 Slides) */}
          <div className="live-slider-container mt-4 d-none d-lg-block">
            <Slider ref={desktopSliderRef} {...desktopSettings}>
              {list.map((proj) => (
                <div className="px-2 pb-3" key={proj.id}>
                  {renderCard(proj)}
                </div>
              ))}
            </Slider>
          </div>

          {/* Mobile Carousel (1 Slide) */}
          <div className="live-slider-container mt-4 d-block d-lg-none">
            <Slider ref={mobileSliderRef} {...mobileSettings}>
              {list.map((proj) => (
                <div className="px-2 pb-3" key={proj.id}>
                  {renderCard(proj)}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}