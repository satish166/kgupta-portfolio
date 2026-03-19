import Slider from "react-slick";
import "./slider.scss";


import img1 from './../../assets/images/img-1.jpg';
import img2 from './../../assets/images/img-2.jpg';
import img3 from './../../assets/images/img-3.jpg';
import img4 from './../../assets/images/img-4.jpg';
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
        <Slider className="custom-slider" {...settings}>

            <div className="slide-item">
               <div className="project-card">
                <div className="project-image">
                    <img src={img4} alt="Project 1" />
                </div>
                <div className="project-content">
                    <h5>Bazaar Insight</h5>
                    <div className="desc">
                        <p>Bazar Insight is a product-based application designed to manage and organize products and their digital assets such as images, documents, and related data. The system works on an organization-based structure, where each organization can manage its own products, categories, and data independently. It provides a centralized platform for product listing, categorization, and efficient data management, helping businesses easily access, update, and maintain their information.</p>
                        <p className="font-semibold">Technology Used:- ASP.NET Core, C#, Web API, PostgreSql, GraphQL,Angular 18 Design Pattern:- CQRS , Repository Pattern</p>
                    </div>
                </div>
               </div>
            </div>
           <div className="slide-item">
               <div className="project-card">
                <div className="project-image">
                    <img src={img2} alt="Project 1" />
                </div>
                <div className="project-content">
                    <h5>LJ Supply Chain Management</h5>
                    <div className="desc">
                        <p>SupplyChainManagement is asystem designed to manage the flow of products from suppliers to inventory and order delivery. It helps in tracking products, managing stock levels, handling supplier details, and processing orders efficiently. The system provides real-time visibility of inventory and ensures smooth coordination between different stages of the supply chain.</p>
                        <p className="font-semibold">Technology Used:- ASP.NET Core, C#, Web API, MS SQL, Angular</p>
                        <p className="font-semibold">Design Pattern:- Repository Pattern</p>
                    </div>
                </div>
               </div>
            </div>
            <div className="slide-item">
               <div className="project-card">
                <div className="project-image">
                    <img src={img3} alt="Project 1" />
                </div>
                <div className="project-content">
                    <h5>LJ Frame Pricing</h5>
                    <div className="desc">
                        <p>LJFramePricingisa system designed to calculate the pricing of custom frames based on size, materials, cost, profit margins, and applicable discounts. It allows users to input specific requirements and automatically generates accurate pricing, reducing manual calculations and ensuring consistency in pricing.</p>
                        <p className="font-semibold">Technology Used:- ASP.NET Core, C#, Web API, MS SQL, Angular</p>
                        <p className="font-semibold">Design Pattern:- Repository Pattern</p>
                    </div>
                </div>
               </div>
            </div>
            <div className="slide-item">
               <div className="project-card">
                <div className="project-image">
                    <img src={img1} alt="Project 1" />
                </div>
                <div className="project-content">
                    <h5>Route Sync Process (Console App)</h5>
                    <div className="desc">
                        <p>RouteSync Processis a console-basedapplication designed to synchronize route data from AS400 to CRM and Magento systems. It ensures accurate and timely data transfer between systems, helping maintain consistency and up-to-date route information across platforms.</p>
                        <p className="font-semibold">Technology Used:- ASP.NET Framework </p>
                    </div>
                </div>
               </div>
            </div>
        </Slider>
    );
}