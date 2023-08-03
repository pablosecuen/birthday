"use client";
import { useEffect, useState } from "react";
import hamburger from "../../assets/hamburguerLogosvg/hamburger-svgrepo-com.svg";
import Image from "next/image";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import NavnarMenuDesktop from "../NavbarMenu/NavnarMenuDesktop";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import logo from "../../assets/logo/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className=" h-24 bg-black border-2 border-white w-full flex items-center justify-between align-middle lg:pr-8 bg-metal2 bg-center bg-contain backdrop-blur-3xl">
        <Image src={logo} alt="logo" className="h-18 sm:w-20 w-16 ml-4 sm:ml-10" />
        {isMobile ? (
          <button onClick={toggleMenu} className=" animation-container">
            <UseAnimations animation={menu2} size={50} fillColor="#ffffff" strokeColor="#ffffff" />
          </button>
        ) : (
          <>
            <NavnarMenuDesktop />
          </>
        )}
      </div>
      {isMobile && <NavbarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;
