import { useState } from 'react';
import bg from '../assets/images/bg15.jpg';
import Navbar from './Navbar';
import '../styles.css';

function Header() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="text-white py-4 max-w-lg tl:text-xs text-lg font-bold">
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
        className=" bg-center bg-cover bg-no-repeat h-screen max-h-[1000px] flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=" border-2 text-xl tl:text-sm border-[#b0aaaa] font-bold text-white p-4 rounded-2xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
                Welcome to my website, I'm Anggih !!
              </button>
            </div>
            <p className="text-white py-4 max-w-lg tl:text-xs text-lg font-bold">
              I am a person that want to work hard toward expertise and mastery
              in my field. I want to be directly involved in helping
              individuals. My entire job experience shaped me
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
                <p className="text-gray-400 font-bold">{linkName}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
