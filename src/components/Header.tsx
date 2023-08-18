import { useState } from "react";
// import logo from "../assets/images/astronout.png";
// import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/banner-bg.png";
import Navbar from "./Navbar";
import "../styles.css";

function Header() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="text-white py-4 max-w-lg tl:text-xs ">
        I have been learning to be Software Engineer by joining RevoU Full Stack
        Software Engineer 2023 program. I want to change the path of my career
        so that I can be part of the future industry. In order to answer the
        demand of the future, I have been learning and practicing with patience
        and passion.
      </p>
    </div>
  );
  const linkName = readMore ? "Read Less " : "Read More !";

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
              <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                Welcome to my Portfolio
              </button>
            </div>
            <h1 className="text-white text-5xl font-bold tl:text-lg">Hi! I'm Anggih</h1>
            <p className="text-white py-4 max-w-lg tl:text-xs ">
              I am a person who has good analytical thinking. I am able to
              quickly adapt to new environments. A person who is fast in
              learning and practicing. I have more than 3 years of work
              experience and ready to continue to develop myself and the
              company. I have good oral or written skills in English.
            </p>
              <div className="App">
                <a
                  className="read-more-link"
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  <p className="text-white font-bold">{linkName}</p>
                </a>
                {readMore && extraContent}
              </div>
            {/* <button className="  text-white text-2xl">
              Let's Connect{" "}
              <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
            </button> */}
          </div>
          {/* <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
