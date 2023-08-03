"use client";
import Image from "next/image";
import medusa from "./assets/medusaimg/medusagreen.png";
import snakebg from "./assets/medusaimg/space.jpg";
import slogan from "./assets/slogan/slogan.png";
import "atropos/css";
import { useEffect } from "react"; // Import useEffect
import ContactForm from "./components/Contact/Contact";

export default function Home() {
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

  return (
    <main className=" flex flex-col items-center align-middle">
      {/* medusa */}
      <div className="flex min-h-screen w-full items-center justify-center  relative">
        {" "}
        <div className=" flex justify-center w-full items-center align-middle drop-shadow-sm  absolute overflow-hidden ">
          <div class="atropos my-atropos w-full flex">
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
                    data-atropos-offset="5"
                  />

                  <Image
                    src={slogan}
                    alt="slogan"
                    width={500}
                    height={600}
                    className="medusa  absolute bottom-96 left-64  sm:left-64 w-80 ml-16   sm:w-auto sm:ml-0 sm:bottom-40 "
                    data-atropos-offset="12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* dress code */}
      <section
        id="dresscode"
        className="mt-96 w-10/12 text-center flex flex-col justify-center items-center "
      >
        <h1 className="text-6xl font-bold text-center">Dress Code</h1>
        <div className="h-full w-full text-center  flex flex-col gap-20 justify-center items-center mt-48">
          <h3>La tematica de la fiesta sera de disfraces</h3>
          <span>
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
      {/* line up */}
      <section
        id="lineup"
        className="mt-96 w-10/12 text-center flex flex-col justify-center items-center "
      >
        <h1 className="text-6xl font-bold text-center">Line Up</h1>
        <div className="h-full flex flex-col gap-20 justify-center items-center mt-48">
          <h3>
            El line up del evento y sus horarios (pueden variar acorde a la vibra de la noche)
          </h3>
          <span>
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
      {/* tarjeta */}
      <section
        id="tarjeta"
        className="mt-96 w-10/12 text-center flex flex-col justify-center items-center "
      >
        <h1 className="text-6xl font-bold text-center">Tarjeta</h1>
        <div className="h-full w-full  flex flex-col gap-20 justify-center items-center mt-48">
          <h3>
            El line up del evento y sus horarios (pueden variar acorde a la vibra de la noche)
          </h3>
          <span>
            Un 18/08/98 el universo me trajo al mundo y 25 años después OSEA Ke me encuentro acá
            queriendo romper el party con quiénes considero mi familia mi factoría y a quienes
            quiero que formen parte! No hay nada que disfrute más que la compañía de los míos así
            que los invito a vivir una noche donde sean lo que quieran ser, dónde bailemos y nos
            divirtamos hasta que se nos cante ✨ Para hacerlo más divertido les traigo está
            propuesta indecente y espero poder contar con su inigualable presencia así que atentis!
          </span>
        </div>
      </section>
      {/* warning */}
      <section
        id="warning"
        className="mt-96 w-10/12 text-center flex flex-col justify-center items-center "
      >
        <h1 className="text-6xl font-bold text-center">Precaución</h1>
        <div className="h-full  flex flex-col gap-20 justify-center items-center mt-48">
          <h3>
            Este es un evento privado, en caso de necesitar invitaciones para sus amistades
            consultar primero antes de pasar este link
          </h3>
          <span>
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
        className="mt-96 w-10/12 flex flex-col justify-center items-center"
      >
        <ContactForm />
      </section>
      <footer className="flex justify-center items-center h-24 w-full ">
        <p>
          {" "}
          © pablito amico 2023 - Todos los derechos sobre mi bruji reservados - portense mal o serán
          castigados
        </p>
      </footer>
    </main>
  );
}
