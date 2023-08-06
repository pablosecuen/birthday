import React from "react";

const handleSmoothScroll = (isMobile) => {
  if (isMobile) {
    const infoElement = document.getElementById("info");
    if (infoElement) {
      infoElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};
function Button() {
  return (
    <button
      className="bg-transparent text-white  text-xs font-bold py-2 px-4 flex flex-col  z-50 absolute top-[82vh] border rounded-2xl animate-pulse"
      onClick={handleSmoothScroll}
    >
      Revela el misterio tocando aquí
      <p className="text-center mx-auto text-xl">▽</p>
    </button>
  );
}

export default Button;
