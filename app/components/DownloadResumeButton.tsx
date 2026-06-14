import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function DownloadResumeButton() {
  return (
    <a 
      href="/khushi-gupta.pdf" 
      download="Khushi-Gupta-Resume.pdf" 
      className="button button-primary d-inline-flex align-items-center justify-content-center resume-download-btn" 
      style={{ 
        textDecoration: 'none', 
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        padding: '10px 18px',
        fontSize: '13px',
        fontWeight: 600,
        borderRadius: '30px',
        gap: '8px',
        height: 'auto',
        letterSpacing: 'normal'
      }}
    >
      <FontAwesomeIcon icon={faDownload} className="download-icon-anim" style={{ fontSize: '13px' }} />
      <span>Download Resume</span>
    </a>
  );
}