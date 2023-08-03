import React from "react";
import Link from "next/link";
import handleNavItemClick from "../../../utils/handleNavItemClick";

function NavnarMenuDesktop() {
  return (
    <div>
      {" "}
      <ul className="flex gap-10  transition duration-500 ">
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black">
          <Link href="/">Inicio</Link>
        </li>
        <li className="my-2 hover:text-secondary">
          <Link href="#dresscode" onClick={(e) => handleNavItemClick(e, "dresscode")}>
            Dress Code
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black">
          <Link href="#lineup" onClick={(e) => handleNavItemClick(e, "lineup")}>
            Line Up
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black">
          <Link href="#tarjeta" onClick={(e) => handleNavItemClick(e, "tarjeta")}>
            invitaciones
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black">
          <Link href="#warning" onClick={(e) => handleNavItemClick(e, "warning")}>
            Warning
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black">
          <Link href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
            Confimación
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavnarMenuDesktop;
