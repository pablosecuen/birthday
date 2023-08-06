import React from "react";

function Button() {
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
      className="mobile-button sm:hidden bg-transparent text-white text-xs font-bold py-2 px-4 flex flex-col z-40 absolute top-[82vh] border rounded-2xl animate-pulse"
      onClick={handleSmoothScroll}
    >
      Revela el misterio tocando aquí
      <p className="text-center mx-auto text-xl">▽</p>
    </button>
  );
}

export default Button;
