import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";

function Navbar(): JSX.Element {
  const [durum, setDurum] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  function scrollFunction(): void {
    const navbarCon = document.querySelector(".navbarcon") as HTMLElement;
    const tl = document.querySelector(".tl") as HTMLElement;

    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navbarCon.style.backgroundColor = "#171717";
    } else {
      navbarCon.style.backgroundColor = "rgba(0, 0, 0, 0)";
      tl.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

  return (
    <>
      <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
        <h1 className="text-4xl font-bold">AnggihP</h1>

        <nav
          className={`flex justify-center items-center gap-x-10 ${
            durum && "lg:hidden"
          } lg:fixed lg:top-0 -z-20 lg:flex-col lg:w-full lg:bg-[#171717] lg:h-[450px] lg:left-0 h-full lg:items-start lg:pl-6 cursor-pointer lg:pt-20`}
        >
          <ul className="flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6">
            <li className="bla">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#skills">Skills</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#projects">Projects</AnchorLink>
            </li>
          </ul>

          <div className="icon text-lg flex gap-4 lg:gap-8 lg:my-10">
          <a href="mailto:anggih10@gmail.com" target="_blank">
              <i className="fa fa-envelope border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

            <a href="https://www.instagram.com/aanggihpratama" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/AnggihP" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
          <div className="btn">
          <a href="https://www.linkedin.com/in/anggihp/" target="_blank">
            <button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold">
              Let's Connect
            </button>
            </a>
          </div>
        </nav>
        <i
          onClick={() => setDurum(!durum)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar
