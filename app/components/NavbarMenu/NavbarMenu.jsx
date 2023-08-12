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
        className={`transition-all duration-500 sm:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed  h-screen sm:mt-16 mt-14 w-screen top-0 left-0 bg-black/40 z-40`}
        onClick={toggleMenu}
      ></div>
      {/* {isModalOpen && <Modal onClose={handleCloseModal} />} */}
      <div
        className={`transition-all duration-1000 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed z-50 bg-transparent  backdrop-blur-2xl top-12 sm:top-16 right-0 w-[50%] h-screen bg-primary shadow-2xl p-4 sm:hidden`}
      >
        <div className="w-24 mx-auto py-8"></div>
        <ul className="flex flex-col">
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
    </>
  );
};

export default NavbarMenu;
