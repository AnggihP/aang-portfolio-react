import { useState } from 'react';
import bg from '../assets/images/bg7x.jpg';
import Navbar from './Navbar';
import '../styles.css';

function Header() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="text-white py-4 max-w-lg tl:text-xs text-sm">
        I am also proficient in using some tech stacks such as HTML, CSS,
        javascript, typescript, tailwind, react, next js, vue js, vsCode,
        GitHub, npm, pnpm, JSON, and PostgreSQL. With the skills and experiences
        mentioned, I believe I can perform well on the job description and
        adaptable to the workplace.
      </p>
    </div>
  );
  const linkName = readMore ? 'Read Less ! ' : 'Read More !';

  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=" border-2 text-sm border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                Welcome to my website
              </button>
            </div>
            <h1 className="text-white text-3xl font-bold tl:text-2xl">
              Hi! I'm Anggih
            </h1>
            <p className="text-white py-4 max-w-lg tl:text-sm text-sm">
              I am a person that want to work hard toward expertise and mastery
              in my field. I want to be directly involved in helping
              individuals. 
              </p>
              <p className="text-white py-4 max-w-lg tl:text-sm text-sm">
              I can work on flexible hours. I have 3 years
              experience of organization life back in college and 4 years of
              work experience in several different roles and companies.
              Organizational experience taught me how to socialize, organize, be
              professional, and lead. Then, my entire job experience shaped me
              into a daily performer who needed to exceed everyday standards and
              make an impression.
            </p>
            <div className="App">
            {readMore && extraContent}
              <a
                className="read-more-link"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <p className="text-white font-bold">{linkName}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
