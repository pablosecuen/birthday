"use client";
import usePageLoading from "./customHooks/usePageLoading.js";
import dynamic from "next/dynamic";

const LandingComponent = dynamic(() => import("./components/landing/Landing"));
const InfoComponent = dynamic(() => import("./components/info/Info"));
const CardComponent = dynamic(() => import("./components/cards/Card"));
const ContactFormComponent = dynamic(() => import("./components/Contact/Contact"));
const PreloaderComponent = dynamic(() => import("./components/preloader/Preloader"));

export default function Home() {
  const loading = usePageLoading();

  return (
    <div>
      {loading ? (
        <PreloaderComponent />
      ) : (
        <main className=" flex flex-col items-center align-middle">
          <LandingComponent />
          <InfoComponent />
          {/* dress code */}
          <section
            id="dresscode"
            className="md:mt-48 mt-12 text-center flex flex-col flex-wrap justify-center items-center  "
          >
            <h1 className="text-2xl md:text-4xl font-bold text-center font-azonix">Dress Code</h1>
            <div className="h-full w-full text-center flex flex-col gap-10 justify-center items-center mt-8 md:mt-10 ">
              <h3 className=" font-custom uppercase text-lg md:text-2xl ">
                Se lo que quieras ser, te dejamos algo de inspo
              </h3>
              <span className=" font-custom text-xl">
                Sección de ejemplos e ideas, si ud quiere que su disfraz aparezca en nuestra seccion
                de disfraces sientase libre de enviarnos su foto
              </span>
              <CardComponent />
            </div>
          </section>

          {/* contacto */}
          <section
            id="confirmacion"
            className="md:mt-32  w-10/12 flex flex-col justify-center items-center"
          >
            <ContactFormComponent />
          </section>
          <footer className="flex justify-center px-10 items-center h-24 w-full text-xs md:text-[1rem] text-center mt-10">
            <p>
              © pablito amico 2023 - Todos los derechos sobre mi bruji reservados - portense mal o
              serán castigados
            </p>
          </footer>
        </main>
      )}
    </div>
  );
}
