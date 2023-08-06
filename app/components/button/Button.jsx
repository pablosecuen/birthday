import React, { useEffect, useState } from "react";

function Button() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // Actualiza el valor de isMobile según el ancho de la pantalla
  }, [isMobile, setIsMobile]);

  const handleSmoothScroll = () => {
    if (isMobile) {
      const infoElement = document.getElementById("info");
      if (infoElement) {
        infoElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <button
      className="bg-transparent text-white  text-xs font-bold py-2 px-4 flex flex-col  z-40 absolute top-[82vh] border rounded-2xl animate-pulse"
      onClick={handleSmoothScroll}
    >
      Revela el misterio tocando aquí
      <p className="text-center mx-auto text-xl">▽</p>
    </button>
  );
}

export default Button;
