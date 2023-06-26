import { useState } from "react";
import img1 from "../assets/images/project-img1.png";
// import img2 from "../assets/images/project-img2.png";
// import img3 from "../assets/images/project-img3.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  img: string;
}

function Projects() {
  const [durum, setDurum] = useState<number>(1);

  const projects: Project[] = [
    {
      id: 1,
      title: "React Features",
      description: "React, Vite, Tailwind, Postman, Typescript",
      link: "https://github.com/AnggihP/w19-react-features-AnggihP",
      img: img1,
    },
    {
      id: 2,
      title: "Simple Web Page featuring React",
      description: "React, Vite, Tailwind, Typescript",
      link: "https://github.com/AnggihP/w18-react-page-AnggihP",
      img: img1,
    },
    {
      id: 3,
      title: "Our Backend - BookmarX",
      description: "Dockerfile, Cloud, PostgreSQL, Typescript, Cloudflare",
      link: "https://github.com/AnggihP/w17-our-backend-group-d",
      img: img1,
    },
    // ... rest of the project objects
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          penjelasan project
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Text-1
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Text-2
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1">
          {durum === 1 &&
            projects.map((item) => (
              <a
                href={item.link}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectCard item={item} />
              </a>
            ))}
        </div>
        {durum === 2 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            isi text-1
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            isi text-2
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
