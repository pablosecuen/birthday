"use client";

import Link from "next/link";
import { useEffect } from "react";
import handleNavItemClick from "../../../utils/handleNavItemClick";

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
          <li className="my-2 hover:text-secondary transition duration-500 hover:scale-125 ">
            <Link href="/">Inicio</Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500 hover:scale-125 ">
            <Link
              href="#dresscode"
              onClick={((e) => handleNavItemClick(e, "dresscode"), toggleMenu)}
            >
              Dress Code
            </Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500 hover:scale-125">
            <Link href="#lineup" onClick={((e) => handleNavItemClick(e, "lineup"), toggleMenu)}>
              Line Up
            </Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500 hover:scale-125">
            <Link
              href="#invitaciones"
              onClick={((e) => handleNavItemClick(e, "invitaciones"), toggleMenu)}
            >
              invitaciones
            </Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500 hover:scale-125">
            <Link href="#warning" onClick={((e) => handleNavItemClick(e, "warning"), toggleMenu)}>
              Warning
            </Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500 hover:scale-125">
            <Link href="#contacto" onClick={((e) => handleNavItemClick(e, "contacto"), toggleMenu)}>
              Confimación
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
