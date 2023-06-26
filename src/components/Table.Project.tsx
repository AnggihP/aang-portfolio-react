// import React from "react";
import { projects } from "../data/project-all-data";

function ProjectTable() {
  return (
    <table className="border-white border-separate border rounded-lg border-spacing-1 ">
      <thead >
        <tr>
          <th className="border-white border py-2 text-lg bg-fuchsia-900">NO.</th>
          <th className="border-white border py-2 text-lg bg-fuchsia-900">TITLE</th>
          <th className="border-white border py-2 text-lg bg-fuchsia-900">TOOLS</th>
        </tr>
      </thead>
      <tbody >
        {projects.map((project) => (
          <tr key={project.id}>
            <td className="border-white border py-1 px-4">{project.id}</td>
            <td className="border-white border py-1 px-4 underline text-clip ">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </td>
            <td className="border-white border py-1 px-4">{project.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProjectTable;
