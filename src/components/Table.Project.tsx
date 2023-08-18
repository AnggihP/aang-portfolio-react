// import React from "react";
import { projects } from "../data/project-all-data";

function ProjectTable() {
  return (
    <table className="border-white border-separate border rounded-lg border-spacing-1 bg-[linear-gradient(90deg,#b004b0,#38097a)]">
      <thead className="bg-[#171717]" >
        <tr >
          <th className="border-white border py-2 text-2xl tl:text-lg ">NO.</th>
          <th className="border-white border py-2 text-2xl tl:text-lg">TITLE</th>
          <th className="border-white border py-2 text-2xl tl:text-lg">TOOLS</th>
        </tr>
      </thead>
      <tbody >
        {projects.map((project) => (
          <tr key={project.id}>
            <td className="bg-[#171717] border-white border py-1 px-4 tl:text-sm">{project.id}</td>
            <td className="border-white border py-1 px-4 underline text-clip tl:text-sm ">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </td>
            <td className="border-white border py-1 px-4 tl:text-xs">{project.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProjectTable;
