"use client";

import { useState, useEffect } from "react";
import "./banner.scss";
import DownloadResumeButton from "../../DownloadResumeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faProjectDiagram, faCode, faTerminal, faSatellite } from "@fortawesome/free-solid-svg-icons";

interface MainBannerProps {
  profile: any;
  socials?: any;
}

export default function MainBanner({ profile, socials }: MainBannerProps) {
  const name = profile?.name || "Khushi Gupta";
  const avatarSrc = profile?.avatar || "/uploads/k-image-1.jpg";
  const s = socials || {};

  // Built-in Cyber-Typewriter Effect
  const [displayText, setDisplayText] = useState("");
  const [subIdx, setSubIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const subtitles = profile?.subtitles || [
    ".NET Full Stack Developer",
    "Backend Developer",
    "ASP.NET Core Specialist"
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = subtitles[subIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Pause on typed word
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setSubIdx((prev) => (prev + 1) % subtitles.length);
      setTypingSpeed(250); // Pause before next word
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, subIdx, subtitles, typingSpeed]);

  return (
    <>
      <section className="main-banner" id="home" data-target="home">
        {/* Futuristic Background Grids */}
        <div className="banner-bg-grid"></div>
        <div className="banner-glow-circle primary-glow"></div>
        <div className="banner-glow-circle secondary-glow"></div>
        
        {/* Tiny cyber particles */}
        <div className="matrix-sparkle sparkle-1"></div>
        <div className="matrix-sparkle sparkle-2"></div>
        <div className="matrix-sparkle sparkle-3"></div>

        <div className="container banner-content">
          <div className="row align-items-center justify-content-between">
            
            {/* LEFT COLUMN: Cybernetic Info Console */}
            <div className="col-12 col-lg-7 text-start banner-console-col">
              
              {/* Pulse status indicator */}
              <div className="system-status-tag">
                <span className="pulse-dot"></span>
                <span className="status-label">
                  <FontAwesomeIcon icon={faSatellite} className="status-ico-spin" /> SYSTEM STATUS: ONLINE
                </span>
              </div>

              {/* Elegant Typography */}
              <h1 className="hero-name-main">
                <span className="first-name">Khushi</span> <span className="last-name">Gupta</span>
              </h1>

              {/* Interactive terminal typewriter prompt */}
              <div className="terminal-typewriter">
                <FontAwesomeIcon icon={faTerminal} className="term-prompt-icon" />
                <span className="term-cursor-symbol">&gt;</span>
                <span className="typed-role-text">{displayText}</span>
                <span className="blinking-cursor">_</span>
              </div>

              <p className="hero-tagline">
                {profile?.about || "Motivated .NET Developer with 1.4 years of experience in building full-stack web applications using .NET, Angular, and modern JavaScript. Skilled in RESTful APIs, Entity Framework, Dapper, and database-driven solutions."}
              </p>

              {/* Telemetry panel Stats grid */}
              <div className="telemetry-stats-grid mt-4">
                <div className="telemetry-stat-card glass-card">
                  <div className="telemetry-bar-acc purple"></div>
                  <FontAwesomeIcon icon={faBriefcase} className="telemetry-icon" />
                  <div className="telemetry-info">
                    <span className="telemetry-val">1.4+ Yrs</span>
                    <span className="telemetry-lbl">Experience</span>
                  </div>
                </div>

                <div className="telemetry-stat-card glass-card">
                  <div className="telemetry-bar-acc mint"></div>
                  <FontAwesomeIcon icon={faProjectDiagram} className="telemetry-icon" />
                  <div className="telemetry-info">
                    <span className="telemetry-val">4+ Apps</span>
                    <span className="telemetry-lbl">Projects</span>
                  </div>
                </div>

                <div className="telemetry-stat-card glass-card">
                  <div className="telemetry-bar-acc blue"></div>
                  <FontAwesomeIcon icon={faCode} className="telemetry-icon" />
                  <div className="telemetry-info">
                    <span className="telemetry-val">MCA</span>
                    <span className="telemetry-lbl">Degree</span>
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="cta-actions-row mt-5 d-flex flex-wrap align-items-center gap-3">
                <DownloadResumeButton />
                
                <div className="hero-socials-group">
                  {s.linkedin && (
                    <a href={s.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill-btn linkedin" title="LinkedIn">
                      <FontAwesomeIcon icon={faLinkedin} />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {s.whatsapp && (
                    <a href={s.whatsapp} target="_blank" rel="noopener noreferrer" className="social-pill-btn whatsapp" title="WhatsApp">
                      <FontAwesomeIcon icon={faWhatsapp} />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Asymmetrical Cybernetic Image Port */}
            <div className="col-12 col-lg-5 text-center mt-5 mt-lg-0 banner-avatar-col">
              
              <div className="cyber-avatar-port">
                {/* Visual scanner line */}
                <div className="scanner-line-sweep"></div>
                
                {/* Rotating tech rings */}
                <div className="rotating-outer-ring"></div>
                <div className="rotating-inner-ring"></div>

                <div className="avatar-glass-frame">
                  <img src={avatarSrc} alt={name} className="avatar-portrait-image" />
                </div>

                {/* Floating Tech Chips around Avatar */}
                <div className="tech-tag-chip chip-top-left">
                  <span className="chip-glow-dot"></span>
                  <span>C#</span>
                  <div className="chip-connect-line line-tl"></div>
                </div>

                <div className="tech-tag-chip chip-top-right">
                  <span className="chip-glow-dot"></span>
                  <span>.NET Core</span>
                  <div className="chip-connect-line line-tr"></div>
                </div>

                <div className="tech-tag-chip chip-bottom-left">
                  <span className="chip-glow-dot"></span>
                  <span>Angular</span>
                  <div className="chip-connect-line line-bl"></div>
                </div>

                <div className="tech-tag-chip chip-bottom-right">
                  <span className="chip-glow-dot"></span>
                  <span>SQL Server</span>
                  <div className="chip-connect-line line-br"></div>
                </div>

                {/* Cybernetic telemetry node label */}
                <div className="port-telemetry-badge">
                  <span className="telemetry-pulse"></span>
                  <span className="telemetry-text">PORTRAIT ID: KG-001</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}