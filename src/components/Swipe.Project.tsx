import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation, Pagination } from "swiper";
import { projects } from "../data/project-all-data";
import ProjectCard from "./ProjectCard";
import ProjectTable from "./Table.Project";
// import bg from "../assets/images/bg9.1.jpg";

function Projects() {
  const [durum, setDurum] = useState<number>(1);

  return (
    <>
      <div id="projects" className="projects text-white py-10 bg-black"
        // style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-white tl:text-sm">
          "This are the data show of My Project since I joined Fullstack bootcamp in early 2023 till present."
        </p>
        <div className="flex justify-center items-center gap-4 mt-5">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${durum === 1 ? "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900" : ""
              }`}
          >
            On-Swipe
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${durum === 2 ? "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900" : ""
              }  `}
          >
            On-Table
          </button>
        </div>
        <div className=" justify-center items-center p-10">
          {durum === 1 && (
            <Swiper
              slidesPerView={3}
              spaceBetween={24}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper p-10 rounded-xl bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 tl:p-5 shadow-white shadow-lg"
              breakpoints={{
                // When window width is >= 320px
                320: {
                  slidesPerView: 1,
                },
                // When window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // When window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                },
              }}
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
        {durum === 2 ? (
          <div
            id="table1"
            className="text-center text-white flex justify-center rounded-xl c-4xl mx-auto lg:p-5"
          >
            < ProjectTable />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
