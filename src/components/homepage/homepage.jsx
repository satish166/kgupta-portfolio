
import "./homepage.scss";
import bannerImage from '../../assets/images/img_bg_2.jpg';
import Countdown from "./countdown/countdown";
// import bannerImage1 from '../../assets/images/img_bg_3.jpg';
export default function Homepage() {


  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SaveTheDate//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:save-the-date-20260405@example",
    "SUMMARY:Wedding - Save the Date",
    "DESCRIPTION:Save the date for our wedding!",
    "DTSTAMP:20260101T000000Z",
    "DTSTART;VALUE=DATE:20260405",
    "DTEND;VALUE=DATE:20260406",
    "END:VEVENT",
    "END:VCALENDAR",
    ""
  ].join("\r\n");

  const handleDownload = () => {
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "save-the-date.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };
  return (
    <>
      <div className="homepage">
        <section className="main-banner">
          <div className="banner-content">
            <div className="">
              <h1 className="names">Rajveer & Neha</h1>
              <h6>We Are Getting Married</h6>
              <Countdown />
              <div className="action">
                <button className="button button-primary" onClick={handleDownload}>
                  Save the Date</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
          <h1>Sandhu</h1>
        </section>
      </div>
    </>
  );
}