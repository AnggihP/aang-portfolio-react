// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
// import { NavigationEvents, PaginationEvents } from "swiper/types";

import img from "../assets/images/meter1.svg";
import bg from "../assets/images/banner-bg.png";

SwiperCore.use([Navigation, Pagination]);

function Skills() {
  return (
    <>
      <div
        id="skills"
        style={{ backgroundImage: `url(${bg})` }}
        className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
      >
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-lg py-3">
          These are several tools that we've used for development and production.
          </p>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
                <div className=" bg-[#171717] ">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Web Dev</h1>
                </div>
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Frontend</h1>
                </div>
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">React.js</h1>
                </div>
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Javascript</h1>
                </div>
          </div>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Tailwind</h1>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
