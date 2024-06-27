import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav
      className={` uppercase  bg-primary p-10 text-white text-[1.6rem]  top-0 `}
    >
      <div className="grid grid-cols-2 items-center  ">
        <p className="uppercase text-[2.4rem] font-sf-pro-display animate-flicker  shadow-[0px 0px 105px 45px rgba(180,214,212,0.9)] inline-block ">
          dhinesh
        </p>

        <ul className="lg:grid lg:grid-cols-6   lg:gap-1 hidden">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#whyhireme">Why hire me</a>
          </li>
          <li>
            <a href="#contacts">contacts</a>
          </li>
        </ul>

        {/* mobile */}
        <div className="lg:hidden col-start-5 col-end-6   ">
          <button onClick={handleToggle}>
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "scale-100" : "scale-0 hidden"
          }   grid text-[2rem] text-center transition transform  col-span-3 justify-center lg:hidden  `}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#whyhireme">Why hire me</a>
          </li>
          <li>
            <a href="#contacts">contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
