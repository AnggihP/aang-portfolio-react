import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import vue from '../assets/vue.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import node from '../assets/node.png';
import nextjs from '..//assets/nextjs.png';
import postgres from '../assets/postgres.png';
import redux from '../assets/redux.png';
import tailwind from '../assets/tailwind.png';
import bg from '../assets/images/bg8.jpg';

interface Tech {
  id: number;
  src: string;
  title: string;
  style: string;
}

const Techs: React.FC = () => {
  const techs: Tech[] = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: vue,
      title: 'Vue',
      style: 'shadow-green-500',
    },
    {
      id: 6,
      src: git,
      title: 'Git',
      style: 'shadow-red-500',
    },
    {
      id: 7,
      src: github,
      title: 'Github',
      style: 'shadow-white',
    },
    {
      id: 8,
      src: node,
      title: 'node',
      style: 'shadow-green-500',
    },
    {
      id: 9,
      src: nextjs,
      title: 'nextjs',
      style: 'shadow-white',
    },
    {
      id: 10,
      src: postgres,
      title: 'postgres',
      style: 'shadow-blue-500',
    },
    {
      id: 11,
      src: redux,
      title: 'redux',
      style: 'shadow-purple-500',
    },
    {
      id: 12,
      src: tailwind,
      title: 'tailwind',
      style: 'shadow-blue-500',
    },
  ];

  return (
    <div
      id="skills"
      style={{ backgroundImage: `url(${bg})` }}
      className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
    >
        <div className="skills-wrapper text-center text-white p-10 rounded-[50px] lg:p-2">
        <h1 className="text-4xl ">Skills</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-white py-4 tl:text-sm">
          "These are several tools that we've used for development and production."
        </p>     
        </div>

      <div className="w-full grid grid-cols-6 tl:grid-cols-4 gap-8 text-center py-8 tl:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img className="w-20 mx-auto py-2 md:py-4" src={src} alt="" />
            <p className="mt-4 md:mt-2 text-white text-lg">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techs;
