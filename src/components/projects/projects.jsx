

import SliderComponent from "../slider/SliderComponent";
import "./projects.scss";



export default function Projects() {


  return (
    <>

      <section className="projects" id="projects">
        <h5 className="primary-heading">Projects</h5>

        <div className="container">
          <div className="row">
            <SliderComponent />
          </div>
        </div>
      </section>
    </>
  );
}