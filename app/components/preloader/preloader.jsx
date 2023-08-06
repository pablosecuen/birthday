// Preloader.js
import React from "react";
import Image from "next/image";
import Script from "next/script";

const Preloader = () => {
  return (
    <div className="preloader-container flex justify-center items-center align-middle fixed top-0 left-0 w-screen h-screen  z-50">
      <div className="preloader animate animate-pulse transition duration-1000">LOADING...</div>
    </div>
  );
};

export default Preloader;
