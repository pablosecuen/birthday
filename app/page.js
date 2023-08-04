"use client";
import Image from "next/image";
import medusa from "./assets/medusaimg/medusagreen.png";
import slogan from "./assets/slogan/slogan.png";
import "atropos/css";
import { useEffect, useState } from "react"; // Import useEffect
import ContactForm from "./components/Contact/Contact";
import Card from "./components/cards/Card";
import sound from "./assets/items/1x/sound.svg";

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
      {/* tarjeta */}
      <section
        id="invitaciones"
        className="mt-48 w-10/12 text-center flex flex-col justify-center items-center "
      >
        <h1 className="text-6xl font-bold text-center ">invitaciones</h1>
        <div className="h-full w-full  flex flex-col gap-20 justify-center items-center mt-24 text-xl ">
          <span className="">
            Un 18/08/98 el universo me trajo al mundo y 25 años
            <br /> después OSEA Ke me encuentro acá queriendo romper el party con quiénes considero
            mi familia mi factoría
            <br /> y a quienes quiero que formen parte!
            <br /> No hay nada que disfrute más que la compañía de los míos así que los invito a
            vivir una noche donde sean lo que quieran ser, dónde bailemos
            <br />
            y nos divirtamos hasta que se nos cante ✨ <br />
            Para hacerlo más divertido les traigo está propuesta indecente y espero poder contar con
            su inigualable presencia así que atentis!
          </span>
        </div>
      </section>
      {/* dress code */}
      <section
        id="dresscode"
        className="mt-48 w-10/12 text-center flex flex-col justify-center items-center "
      >
        <h1 className="text-6xl font-bold text-center">Dress Code</h1>
        <div className="h-full w-full text-center flex flex-col gap-20 justify-center items-center mt-24">
          <h3 className="text-4xl ">Se lo que quieras ser, te dejamos algo de inspo</h3>
          <span>
            Sección de ejemplos e ideas, si ud quiere que su disfraz aparezca en nuestra seccion de
            disfraces sientase libre de enviarnos su foto
          </span>
          <Card />
        </div>
      </section>
      {/* line up */}
      <section
        id="lineup"
        className="relative mt-48 w-10/12 text-center flex flex-col justify-center items-center backdrop-blur-lg "
      >
        <h1 className="text-6xl font-bold text-center">Line Up</h1>
        <Image
          src={sound}
          alt="sound"
          className="absolute -top-20 left-0 w-auto -z-10 medusa mx-auto "
        />

        <div className="h-full flex flex-col gap-20 justify-center items-center mt-24">
          <h3 className="backdrop-blur-3xl text-2xl">
            El line up del evento y sus horarios (pueden variar acorde a la vibra de la noche)
          </h3>
          <span className="backdrop-blur-lg  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo ultricies,
            iaculis risus quis, sollicitudin dui. Suspendisse potenti. Sed hendrerit congue leo,
            eget aliquam odio. Maecenas facilisis lectus eget orci volutpat malesuada. Sed volutpat,
            felis id suscipit rhoncus, arcu turpis malesuada libero, eu gravida lectus purus a mi.
            Curabitur sit amet orci odio. Nunc ut metus vitae nunc tincidunt tincidunt. Vivamus id
            dictum quam. Ut ut laoreet turpis. Vestibulum eu massa nec felis feugiat consectetur nec
            sit amet mi. Praesent mattis sagittis purus nec venenatis. Nulla tincidunt velit ex, id
            hendrerit purus iaculis sit amet. Fusce ac tincidunt nisl. Fusce eget nunc ac urna
            maximus elementum nec ut elit. Nulla tempus consectetur sem ac posuere. Vestibulum
            suscipit elit eu arcu blandit, sit amet euismod est fermentum.
          </span>
        </div>
      </section>

      {/* warning */}
      <section
        id="warning"
        className="mt-48 z-50 w-10/12 text-center flex flex-col justify-center items-center"
      >
        <h1 className="text-6xl font-bold text-center">Precaución</h1>
        <div className="h-full flex flex-col gap-20 justify-center items-center mt-24">
          <h3 className="text-4xl">
            Este es un evento privado, en caso de necesitar invitaciones para sus amistades
            consultar primero antes de pasar este link
          </h3>
          <span className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo ultricies,
            iaculis risus quis, sollicitudin dui. Suspendisse potenti. Sed hendrerit congue leo,
            eget aliquam odio. Maecenas facilisis lectus eget orci volutpat malesuada. Sed volutpat,
            felis id suscipit rhoncus, arcu turpis malesuada libero, eu gravida lectus purus a mi.
            Curabitur sit amet orci odio. Nunc ut metus vitae nunc tincidunt tincidunt. Vivamus id
            dictum quam. Ut ut laoreet turpis. Vestibulum eu massa nec felis feugiat consectetur nec
            sit amet mi. Praesent mattis sagittis purus nec venenatis. Nulla tincidunt velit ex, id
            hendrerit purus iaculis sit amet. Fusce ac tincidunt nisl. Fusce eget nunc ac urna
            maximus elementum nec ut elit. Nulla tempus consectetur sem ac posuere. Vestibulum
            suscipit elit eu arcu blandit, sit amet euismod est fermentum.
          </span>
        </div>
      </section>

      <section
        id="confirmacion"
        className="mt-48 w-10/12 flex flex-col justify-center items-center"
      >
        <ContactForm />
      </section>
      <footer className="flex justify-center items-center h-24 w-full text-xs md:text-lg">
        <p>
          {" "}
          © pablito amico 2023 - Todos los derechos sobre mi bruji reservados - portense mal o serán
          castigados
        </p>
      </footer>
    </main>
  );
}
