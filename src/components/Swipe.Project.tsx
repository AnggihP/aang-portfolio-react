import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation, Pagination } from "swiper";
import { projects } from "../data/project-all-data";
import ProjectCard from "./ProjectCard";
import ProjectTable from "./Table.Project";
import bg from "../assets/images/bg9.jpg";

function Projects() {
  const [durum, setDurum] = useState<number>(1);

  return (
    <>
      <div id="projects" className="projects text-white py-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-white py-4 tl:text-sm">
          "This are the data show of My Project since I joined Fullstack bootcamp in early 2023 till present."
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${durum === 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }`}
          >
            On-Swipe
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }  `}
          >
            On-Table
          </button>
        </div>
        <div className="p-10 justify-center items-center">
          {durum === 1 && (
            <Swiper
              slidesPerView={3}
              spaceBetween={24}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper p-10 rounded-xl bg-[linear-gradient(90deg,#b004b0,#38097a)] tl:p-5 shadow-white shadow-lg"

            >
              {projects.map((item) => (
                <SwiperSlide key={item.id} className="rounded-xl shadow-white shadow-md">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectCard item={item} />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        {/* <div className="p-5 justify-center items-center">
          {durum === 1 && (
            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper p-10 rounded-xl bg-[#171717] tl:p-5"
              
            >
              {projects.map((item) => (
                <SwiperSlide key={item.id} className="rounded-3xl ">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectCard item={item} />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div> */}
        {/* <div className="w-full grid tl:grid-cols-3 gap-8 text-center py-8 tl:px-0 lg:hidden">
        {projects.map(({ name, title, style }) => (
          <div
            key={id}
            className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img className="w-20 mx-auto py-2 md:py-4" item.img={item.img} alt="" />
            <p className="mt-4 md:mt-2 text-white text-lg">{title}</p>
          </div>
        ))}
        </div> */}
        {durum === 2 ? (
          <div
            id="table1"
            className="text-center text-white flex justify-center rounded-xl py-16 c-4xl mx-auto lg:p-5"
          >
            < ProjectTable />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
