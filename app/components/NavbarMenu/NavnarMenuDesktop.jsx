import React from "react";
import Link from "next/link";
import handleNavItemClick from "../../../utils/handleNavItemClick";
import Image from "next/image";
import logo from "../../assets/logo/logo.png";

function NavnarMenuDesktop() {
  return (
    <div className="flex justify-center items-center w-full mx-auto px-96 align-middle">
      {" "}
      <ul className="flex gap-10 justify-evenly transition duration-500 items-center w-full">
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black hover:scale-125 font-custom text-xl xl:text-2xl">
          <Link href="/">MEDUxA</Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black hover:scale-125 font-custom text-xl xl:text-2xl">
          <Link
            href="#dresscode"
            onClick={(e) => handleNavItemClick(e, "dresscode")}
            className="flex gap-2"
          >
            <p>Dress</p> <p>Code</p>
          </Link>
        </li>

        <Image src={logo} alt="logo" className="h-18 sm:w-16 w-16 ml-4 sm:ml-10" />
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black hover:scale-125 font-custom text-xl xl:text-2xl">
          <Link href="#evento" onClick={(e) => handleNavItemClick(e, "evento")}>
            EVENTO
          </Link>
        </li>

        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black hover:scale-125 font-custom text-xl xl:text-2xl">
          <Link href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
            Confimación
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavnarMenuDesktop;
