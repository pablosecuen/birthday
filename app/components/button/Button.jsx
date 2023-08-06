import React from "react";

const handleSmoothScroll = () => {
  if (isMobile) {
    window.scrollBy({
      top: 800,
      behavior: "smooth",
    });
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
