// import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl tl:text-lg">AnggihP</h1>
          <div className="flex gap-4 cursor-pointer ">
            <a href="mailto:anggih10@gmail.com" target="_blank">
              <i className="fa fa-envelope border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://wa.me/6281256306072" target="_blank">
              <i className="fa-brands fa-whatsapp border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/AnggihP" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.linkedin.com/in/anggihp/" target="_blank">
              <i className="fa-brands fa-linkedin border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
