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
      <div className="img-box h-[250px] tl:h-[80px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
        <img src={item.img} alt="" className="h-8 w-8" />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
          <h1 className="font-bold text-2xl tl:text-sm">{item.title}</h1>
          <p className="font-bold text-sm tl:text-xs">{item.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
