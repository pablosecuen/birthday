/* eslint-disable react/no-unescaped-entities */

import ContactForm from "./components/Contact/Contact";
import Card from "./components/cards/Card";
import Landing from "./components/landing/Landing";
import sectionsData from "../utils/data";

export default function Home() {
  return (
    <main className=" flex flex-col items-center align-middle">
      <Landing />

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
