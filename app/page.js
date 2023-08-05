/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import medusa from "./assets/medusaimg/medusagreen.png";
import slogan from "./assets/slogan/slogan.png";
import "atropos/css";
import { useEffect, useState } from "react"; // Import useEffect
import ContactForm from "./components/Contact/Contact";
import Card from "./components/cards/Card";
import sound from "./assets/items/1x/sound.svg";
import sectionsData from "../utils/data";

export default function Home() {
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
  }, []); // Make sure this effect runs only once after the initial render

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
    <main className=" flex flex-col items-center align-middle">
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

                  {/* <Image
                    src={snakebg}
                    alt="snakes"
                    width={1000}
                    height={800}
                    className=" top-0 w-full h-full absolute -mx-24 "
                    ata-atropos-offset="-5 "
                  /> */}

                  <Image
                    src={medusa}
                    alt="medusa"
                    width={500}
                    height={600}
                    className="medusa top-24 absolute pl-4 sm:left-68 left-64 w-80  lg:w-[500px] sm:pl-0  "
                    data-atropos-offset="15"
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
          className="bg-transparent text-white  text-xs font-bold py-2 px-4 flex flex-col  z-50 absolute bottom-6 border rounded-2xl animate-pulse"
          onClick={handleSmoothScroll}
        >
          Revela el misterio tocando aquí
          <p className="text-center mx-auto text-xl">▽</p>
        </button>
      )}

      <div className="flex flex-col mt-32 w-[80vw]  justify-evenly items-center md:flex-row md:h-[500px] gap-20">
        {sectionsData.map((section) => (
          <section
            key={section.id}
            className=" w-[350px] h-full flex flex-col items-center  rounded-3xl justify-center p-4  bg-card bg-contain bg-center bg-no-repeat "
          >
            <div className="relative text-center flex flex-col items-center ">
              <h2 className="card pb-4 font-bold text-center text-2xl contrast-100  l ">
                {section?.title}
              </h2>
              <span className="card  rounded-2xl">{section?.subtitle}</span>
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {/* dress code */}
      <section
        id="dresscode"
        className="md:mt-48 mt-12 w-10/12 text-center flex flex-col justify-center items-center "
      >
        <h1 className="text-2xl md:text-6xl font-bold text-center">Dress Code</h1>
        <div className="h-full w-full text-center flex flex-col gap-20 justify-center items-center mt-8 md:mt-24">
          <h3 className=" text-lg md:text-4xl ">Se lo que quieras ser, te dejamos algo de inspo</h3>
          <span className="italic">
            Sección de ejemplos e ideas, si ud quiere que su disfraz aparezca en nuestra seccion de
            disfraces sientase libre de enviarnos su foto
          </span>
          <Card />
        </div>
      </section>

      {/* contacto */}
      <section
        id="confirmacion"
        className="md:mt-32  w-10/12 flex flex-col justify-center items-center"
      >
        <ContactForm />
      </section>
      <footer className="flex justify-center px-10 items-center h-24 w-full text-xs md:text-lg">
        <p>
          {" "}
          © pablito amico 2023 - Todos los derechos sobre mi bruji reservados - portense mal o serán
          castigados
        </p>
      </footer>
    </main>
  );
}
