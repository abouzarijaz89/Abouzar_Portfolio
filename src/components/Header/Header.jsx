import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center ">
              A
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Abouzar Ijaz
              </h2>
              <p className="text-smallTextColor  text-[14px] font-[500]">
                Front-End Developer
              </p>
            </div>
          </div>
          <div className="menu ">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallColor font-[600]" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="text-smallColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallColor font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallColor font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-smallColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* ===========navbar end =========== */}

          {/* ============menu right start ========== */}

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover-font-[500] ease-in duration-300">
              <i class="ri-file-download-line"></i>Download CV
              </button>
              <span className="text-2xl text-smallTextColor md:hidden cursor-pointer"><i class="ri-menu-line"></i></span>
            </div>
       
          {/* ============menu right   end ========== */}

        </div>
      </div>
    </header>
  );
};

export default Header;
