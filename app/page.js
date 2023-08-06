/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import ContactForm from "./components/Contact/Contact";
import Card from "./components/cards/Card";
import zodiac from "./assets/spinner/zodiac.gif";
import Info from "./components/info/Info";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "react-query";
import Image from "next/image";

const queryClient = new QueryClient();

const LandingComponent = dynamic(() => import("./components/landing/Landing"));

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense
        fallback={
          <Image
            src={zodiac}
            alt="loading"
            width={1920}
            height={1080}
            layout="fixed"
            className="fixed top-0 left-0 z-50"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={zodiac}
            unoptimized={true}
            loading="lazy"
            priority={true}
          />
        }
      >
        <main className=" flex flex-col items-center align-middle">
          <LandingComponent />

          <Info />

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
          <footer className="flex justify-center px-10 items-center h-24 w-full text-xs md:text-[1rem] text-center mt-10">
            <p>
              © pablito amico 2023 - Todos los derechos sobre mi bruji reservados - portense mal o
              serán castigados
            </p>
          </footer>
        </main>
      </React.Suspense>
    </QueryClientProvider>
  );
}
