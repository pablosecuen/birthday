/* eslint-disable react/no-unescaped-entities */

import ContactForm from "./components/Contact/Contact";
import Card from "./components/cards/Card";
import Landing from "./components/landing/Landing";
import sectionsData from "../utils/data";
import ring from "./assets/cards/cardbg-01.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col items-center align-middle">
      <Landing />

      <div className="flex relative flex-col mt-32 md:mt-48 w-[80vw] h-full justify-evenly items-center md:flex-row md:h-[500px] gap-20 ">
        <Image
          src={ring}
          alt="ring"
          width={500}
          height={500}
          className="absolute rounded-3xl w-[800px]"
        />
        {sectionsData.map((section) => (
          <section
            key={section.id}
            className=" w-[350px] h-full flex flex-col items-center  rounded-3xl justify-center p-4  "
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
      </div>

      {/* dress code */}
      <section
        id="dresscode"
        className="md:mt-48 mt-12 w-10/12 text-center flex flex-col justify-center items-center  "
      >
        <h1 className="text-2xl md:text-6xl font-bold text-center font-azonix">Dress Code</h1>
        <div className="h-full w-full text-center flex flex-col gap-20 justify-center items-center mt-8 md:mt-24">
          <h3 className=" font-custom text-lg md:text-4xl ">
            Se lo que quieras ser, te dejamos algo de inspo
          </h3>
          <span className=" font-custom text-xl">
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
