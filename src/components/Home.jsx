import React from "react";
import projfileIMG from "../assets/images/dhinesh.png";

const Home = () => {
  return (
    <header
      id="home"
      className="grid gird-cols-1 md:grid-cols-2 place-items-center px-10 mt-96"
    >
      <div className="text-[3.6rem] text-center sm:text-left border-black uppercase ">
        <h1>
          I am dhinesh
          <span className="text-primary block text-[2.6rem] font-bold font-sf-pro-display">
            Full stack web developer
          </span>
        </h1>
        <button className="  uppercase text-[1.6rem]  px-10 py-6 bg-primary text-white">
          Download
          <span className="ml-10">
            <svg
              fill="#fff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="size-10 float-right "
              viewBox="0 0 43.916 43.916"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5
		C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304
		c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709
		c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855
		L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z
		 M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416
		h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
      <figure className="relative ">
        <div className="bg-primary rounded-full size-[500px] absolute top-[5%]"></div>
        <img
          src={projfileIMG}
          alt="dhinesh"
          className="drop-shadow-2xl min-w-full  "
        />
      </figure>
    </header>
  );
};

export default Home;
