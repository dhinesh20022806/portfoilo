import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const navClassBtn = `  before:rounded cursor-pointer  before:content-[''] text-white before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0  before:border-b-4 before:border-white before:scale-0 before:transition-transform before:duration-300 before:ease-in-out before:origin-bottom-left before:hover:scale-100 relative uppercase pb-1 tracking-widest`;

  return (
    <nav
      className={` uppercase  bg-primary p-10 text-white text-[1.6rem]  top-0 `}
    >
      <div className="grid grid-cols-2 items-center  ">
        <div className=" animate-flicker ">
          <span className="absolute mx-auto py-4 flex  border w-fit bg-gradient-to-r blur-xl from-white  to-white bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
            Dhinesh
          </span>
          <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white to-white  bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
            Dhinesh
          </h1>
        </div>

        <ul className="lg:grid lg:grid-cols-5 lg:gap-1 font-semibold  hidden">
          <li>
            <a href="#home" className={navClassBtn}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={navClassBtn}>
              About
            </a>
          </li>
          <li>
            <a href="#skill" className={navClassBtn}>
              Skills
            </a>
          </li>
          <li>
            <a href="#project" className={navClassBtn}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contacts" className={navClassBtn}>
              contacts
            </a>
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
          }   grid text-[2rem] text-center gap-5 col-span-3 justify-center lg:hidden  `}
        >
          <li>
            <a href="#home" className={navClassBtn}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={navClassBtn}>
              About
            </a>
          </li>
          <li>
            <a href="#skill" className={navClassBtn}>
              Skills
            </a>
          </li>
          <li>
            <a href="#project" className={navClassBtn}>
              Projects
            </a>
          </li>
          <li>
            <a href="#whyhireme" className={navClassBtn}>
              Why hire me
            </a>
          </li>
          <li>
            <a href="#contacts" className={navClassBtn}>
              contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
