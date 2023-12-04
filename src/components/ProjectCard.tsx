import React from 'react';

interface ProjectCardProps {
  item: {
    id: number;
    title: string;
    description: string;
    link: string;
    img: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <>
      <div className="h-[400px] flex flex-col rounded-xl">
      <div className="img-box h-[200px] my-0 rounded-xl">
        <img src={item.img} alt="" className="h-5 w-5 rounded-t-xl" />
      </div>
        <div className="bottom-[-100%] h-[200px] left-0 w-full text-center bg-[#000000] rounded-b-xl flex flex-col justify-center">
          <h1 className="font-bold text-xl tl:text-sm mb-5 text-blue-500 ">{item.title}</h1>
          <p className="font-bold text-sm tl:text-xs ">{item.description}</p>
          </div>
      </div>
    </>
  );
};

export default ProjectCard;
