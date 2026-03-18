
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function DownloadResumeButton() {
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/satish-resume.pdf'; // PDF inside public folder
    a.download = 'Satish-Kumar-Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button onClick={handleDownload} className="button button-primary">
        <FontAwesomeIcon className="me-1" icon={faFilePdf} />  Download CV
    </button>
  );
}