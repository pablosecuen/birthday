"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ring from "../../assets/cards/cardbg-01.png";
import sectionsData from "../../../utils/data";

function Info() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="info"
      className="flex relative flex-col mt-32 md:mt-72 w-[80vw] h-full justify-evenly items-center md:flex-row md:h-[500px] gap-20 "
    >
      {!isMobile && (
        <Image
          src={ring}
          alt="ring"
          width={500}
          height={500}
          className="absolute rounded-3xl w-[800px]"
        />
      )}

      {sectionsData.map((section) => (
        <section
          key={section.id}
          id="evento"
          className=" w-[350px] h-full flex flex-col items-center  rounded-3xl justify-center p-4 bg-card  bg-contain  bg-center  bg-no-repeat md:bg-none"
        >
          <div className="relative text-center flex flex-col items-center ">
            <h2 className="card pb-4 font-bold text-center text-2xl contrast-100 font-azonix ">
              {section?.title}
            </h2>
            <h3 className="card  rounded-2xl pb-4 text-md">{section.content?.subtitle}</h3>
            <span className="card text-sm"> {section.content.description}</span>
          </div>
        </section>
      ))}
    </section>
  );
}

export default Info;
