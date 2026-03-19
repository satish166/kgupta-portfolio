import Slider from "react-slick";
import "./slider.scss";

export default function SliderComponent() {

   const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  autoplay: false,


};



    return (
        <Slider {...settings}>

            <div><div className="slide-box">Slide 1</div></div>
            <div><div className="slide-box">Slide 2</div></div>
            <div><div className="slide-box">Slide 3</div></div>
            <div><div className="slide-box">Slide 4</div></div>
            <div><div className="slide-box">Slide 5</div></div>
        </Slider>
    );
}