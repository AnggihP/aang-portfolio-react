import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation, Pagination } from "swiper";
import { projects } from "../data/project-all-data";
import ProjectCard from "./ProjectCard";
import ProjectTable from "./Table.Project";

function Projects() {
  const [durum, setDurum] = useState<number>(1);

  return (
    <>
      <div id="projects" className="projects bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          "This are the data show of My Project since I joined Fullstack bootcamp in early 2023 till present."
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            On-Swipe
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            On-Table
          </button>
          {/* <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Text-2
          </button> */}
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
              className="mySwiper p-10 bg-white rounded-xl"
            >
              {projects.map((item) => (
                <SwiperSlide key={item.id} className="rounded-3xl">
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
            className="text-center text-white flex justify-center shadow-xl shadow-white rounded-xl bg-[linear-gradient(90deg,#b004b0,#38097a);] py-16 max-w-4xl mx-auto lg:p-5"
          >
            < ProjectTable />
          </div>
        ) : null}
        {/* {durum === 3 ? (
          <div
            id="text2"
            className="tab-pane text-center text-white py-5 lg:p-5"
          >
            isi text-2
          </div>
        ) : null} */}
      </div>
    </>
  );
}

export default Projects;
