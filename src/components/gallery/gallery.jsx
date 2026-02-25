

import "./gallery.scss";

// images
import one from '../../assets/images/1.jpg';
import two from '../../assets/images/2.jpg';
import three from '../../assets/images/3.jpg';
import four from '../../assets/images/4.jpg';
import five from '../../assets/images/5.jpg';
import six from '../../assets/images/6.jpg';
import seven from '../../assets/images/7.jpg';
import eight from '../../assets/images/8.jpg';
import nine from '../../assets/images/9.jpg';
import ten from '../../assets/images/10.jpg';
import eleven from '../../assets/images/11.jpg';
import twelve from '../../assets/images/12.jpg';
import thirteen from '../../assets/images/13.jpg';
import fourteen from '../../assets/images/14.jpg';
import fifteen from '../../assets/images/15.jpg';
import sixteen from '../../assets/images/16.jpg';
import seventeen from '../../assets/images/17.jpg';
import eighteen from '../../assets/images/18.jpg';
import nineteen from '../../assets/images/19.jpg';
import twenty from '../../assets/images/20.jpg';
import twentyOne from '../../assets/images/21.jpg';
import twentyTwo from '../../assets/images/22.jpg';
import twentythree from '../../assets/images/23.jpg';
import twentyfour from '../../assets/images/24.jpg';
import twentyfive from '../../assets/images/25.jpg';
import twentysix from '../../assets/images/26.jpg';
import twentyseven from '../../assets/images/27.jpg';
import twentyeight from '../../assets/images/28.jpg';
import twentynine from '../../assets/images/29.jpg';
import thirty from '../../assets/images/30.jpg';
import thirtyone from '../../assets/images/31.jpg';
import thirtytwo from '../../assets/images/32.jpg';
import thirtythree from '../../assets/images/33.jpg';
import thirtyfour from '../../assets/images/34.jpg';
import thirtyfive from '../../assets/images/35.jpg';
import thirtysix from '../../assets/images/36.jpg';
import thirtyseven from '../../assets/images/37.jpg';
import thirtyeight from '../../assets/images/38.jpg';

export default function Gallery() {


  return (
    <>
      <div className="gallery">
        <section className="main-banner">
          <div className="banner-content">
            <div className="">
              <h1 className="names">Gallery</h1>
              <h6>Made by Satish Sandhu</h6>
            </div>
          </div>
        </section>


        <section className="wedding-gellery">
          <span className="min-heading">Our Memories</span>
          <h2 className="primary-heading">Wedding Gallery</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className="container">
            <div className="row">
              <div className="gellery">
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
                <img src={five} alt="" />
                <img src={six} alt="" />
                <img src={seven} alt="" />
                <img src={eight} alt="" />
                <img src={nine} alt="" />
                <img src={ten} alt="" />
                <img src={eleven} alt="" />
                <img src={twelve} alt="" />
                <img src={thirteen} alt="" />
                <img src={fourteen} alt="" />
                <img src={fifteen} alt="" />
                <img src={sixteen} alt="" />
                <img src={seventeen} alt="" />
                <img src={eighteen} alt="" />
                <img src={nineteen} alt="" />
                <img src={twenty} alt="" />
                <img src={twentyOne} alt="" />
                <img src={twentyTwo} alt="" />
                <img src={twentythree} alt="" />
                <img src={twentyfour} alt="" />
                <img src={twentyfive} alt="" />
                <img src={twentysix} alt="" />
                <img src={twentyseven} alt="" />
                <img src={twentyeight} alt="" />
                <img src={twentynine} alt="" />
                <img src={thirty} alt="" />
                <img src={thirtyone} alt="" />
                <img src={thirtytwo} alt="" />
                <img src={thirtythree} alt="" />
                <img src={thirtyfour} alt="" />
                <img src={thirtyfive} alt="" />
                <img src={thirtysix} alt="" />
                <img src={thirtyseven} alt="" />
                <img src={thirtyeight} alt="" />

              </div>
              {/* <div className="action">
                <a href="/gallery" className="button button-primary">View All images</a>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}