import React from "react";
import Link from "next/link";
import handleNavItemClick from "../../../utils/handleNavItemClick";
import Image from "next/image";
import logo from "../../assets/logo/logo.png";

function NavnarMenuDesktop() {
  return (
    <div className="flex justify-center items-center w-full mx-auto px-64 align-middle">
      {" "}
      <ul className="flex gap-10 justify-evenly transition duration-500 items-center w-full">
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black hover:scale-125 ">
          <Link href="/">Inicio</Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black hover:scale-125">
          <Link href="#dresscode" onClick={(e) => handleNavItemClick(e, "dresscode")}>
            Dress Code
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black hover:scale-125">
          <Link href="#lineup" onClick={(e) => handleNavItemClick(e, "lineup")}>
            Line Up
          </Link>
        </li>
        <Image src={logo} alt="logo" className="h-18 sm:w-20 w-16 ml-4 sm:ml-10" />
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black hover:scale-125">
          <Link href="#invitaciones" onClick={(e) => handleNavItemClick(e, "invitaciones")}>
            invitaciones
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black hover:scale-125">
          <Link href="#warning" onClick={(e) => handleNavItemClick(e, "warning")}>
            Warning
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black hover:scale-125">
          <Link href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
            Confimación
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavnarMenuDesktop;
