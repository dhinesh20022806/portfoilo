import { useState } from "react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const NavToggle = () => {
    setOpen((prev) => !prev);
  };
  const navClassBtn = ` before:rounded cursor-pointer  before:content-[''] text-primary before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0  before:border-b-4 before:border-primary before:scale-0 before:transition-transform before:duration-300 before:ease-in-out before:origin-bottom-left before:hover:scale-100 relative uppercase pb-1 tracking-widest`;
  const toggleMainBtn = `lg:hidden flex flex-col items-center gap-5 justify-center   transition-transform origin-top  duration-300 ease-linear`;
  return (
    <nav className="text-[1.6rem] text-white">
      <div className=" flex justify-between px-10 py-5  bg-primary items-center ">
        <div>
          <p className="uppercase text-[2.6rem] ">
            Dhinesh
          </p>
        </div>
        <div>
          <ul className="lg:flex gap-5 hidden  ">
            <li>
              <a className={navClassBtn}>home</a>
            </li>
            <li>
              <a className={navClassBtn}>About</a>
            </li>
            <li>
              <a className={navClassBtn}>Skill</a>
            </li>
            <li>
              <a className={navClassBtn}>Project</a>
            </li>
            <li>
              <a className={navClassBtn}>Contact</a>
            </li>
          </ul>

          <button onClick={NavToggle} className="lg:hidden">
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 "
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
                strokeWidth={"1.5"}
                stroke="currentColor"
                className="size-16  "
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
      </div>
      <ul
        className={`${toggleMainBtn} my-10 font-semibold font-sf-pro-text  ${
          isOpen ? "scale-100" : "scale-0 hidden "
        }`}
      >
        <li>
          <a className={navClassBtn}>home</a>
        </li>
        <li>
          <a className={navClassBtn}>About</a>
        </li>
        <li>
          <a className={navClassBtn}>Skill</a>
        </li>
        <li>
          <a className={navClassBtn}>Project</a>
        </li>
        <li>
          <a className={navClassBtn}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
