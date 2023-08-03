"use client";
import Image from "next/image";
import Link from "next/link";
import button from "../../assets/hamburguerLogosvg/hamburger.svg";
import { useEffect, useState } from "react";

// import Modal from "../ModalLogin/ModalLogin";

const NavbarMenu = ({ isOpen, toggleMenu }) => {
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, toggleMenu]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className={`transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed  h-screen sm:mt-16 mt-14 w-screen top-0 left-0 bg-black/40 z-40`}
        onClick={toggleMenu}
      ></div>
      {/* {isModalOpen && <Modal onClose={handleCloseModal} />} */}
      <div
        className={`transition-all duration-1000 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed z-50 bg-black top-24 sm:top-16 right-0 w-[50%] h-screen bg-primary shadow-2xl p-4 `}
      >
        <div className="w-24 mx-auto py-8"></div>
        <ul className="flex flex-col">
          <li className="my-2 hover:text-secondary transition duration-500">
            <Link href="/">Inicio</Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
          <Link href="/dresscode" onClick={(e) => handleNavItemClick(e, "dresscode")}>
            Dress Code
          </Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
          <Link href="#lineup" onClick={(e) => handleNavItemClick(e, "lineup")}>
            Line Up
          </Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
          <Link href="#tarjeta" onClick={(e) => handleNavItemClick(e, "tarjeta")}>
            invitaciones
          </Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
          <Link href="#warning" onClick={(e) => handleNavItemClick(e, "warning")}>
            Warning
          </Link>
          </li>
          <Link href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
            Confimación
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
