"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import medusa from "../../assets/medusaimg/medusagreen.png";
import slogan from "../../assets/slogan/slogan.png";
import columns from "../../assets/medusaimg/columns.png";

import "atropos/css";

function Landing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const Atropos = require("atropos").default; // Import Atropos library dynamically

    const myAtropos = Atropos({
      el: ".my-atropos",
      activeOffset: 40,
      shadowScale: 1.05,
      onEnter() {
        console.log("Enter");
      },
      onLeave() {
        console.log("Leave");
      },
      onRotate(x, y) {
        console.log("Rotate", x, y);
      },
    });
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // Actualiza el valor de isMobile según el ancho de la pantalla
  }, []);

  const handleSmoothScroll = () => {
    if (isMobile) {
      window.scrollBy({
        top: 800,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* medusa */}
      <div className="flex min-h-screen w-full items-center justify-center  relative">
        {" "}
        <div className=" flex justify-center w-screen items-center align-middle drop-shadow-sm  absolute overflow-hidden ">
          <div class="atropos my-atropos w-full flex ml-36 mt-20 sm:mt-0 sm:ml-0 ">
            {/* <!-- scale container (required) --> */}
            <div class="atropos-scale  flex">
              {/* <!-- rotate container (required) --> */}

              <div class="atropos-rotate  flex">
                {/* <!-- inner container (required) --> */}

                <div class="atropos-inner relative flex bg-space bg-cover bg-no-repeat bg-center -ml-36 mt-24 sm:mt-0">
                  {/* <!-- put your custom content here --> */}

                  <Image
                    src={columns}
                    alt="columns"
                    width={800}
                    height={800}
                    className="medusa top-24 absolute w-[450px] left-48  sm:pl-0 contrast-200 brightness-50 sm:w-[800px] sm:left-24 "
                    data-atropos-offset="5"
                  />

                  <Image
                    src={medusa}
                    alt="medusa"
                    width={500}
                    height={600}
                    className="medusa top-24 absolute pl-4 sm:left-68 left-64 w-80  lg:w-[500px] sm:pl-0  "
                    data-atropos-offset="16"
                  />

                  <Image
                    src={slogan}
                    alt="slogan"
                    width={500}
                    height={600}
                    className="medusa  absolute bottom-96 left-64  sm:left-52 w-80 ml-4   sm:w-auto sm:ml-0 sm:bottom-40 "
                    data-atropos-offset="22"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <button
          className="bg-transparent text-white  text-xs font-bold py-2 px-4 flex flex-col  z-40 absolute bottom-6 border rounded-2xl animate-pulse"
          onClick={handleSmoothScroll}
        >
          Revela el misterio tocando aquí
          <p className="text-center mx-auto text-xl">▽</p>
        </button>
      )}
    </>
  );
}

export default Landing;
