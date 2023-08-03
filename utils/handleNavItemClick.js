import { handleSmoothScroll } from "./handleSmoothScroll";

const handleNavItemClick = (e, sectionId) => {
  e.preventDefault();

  // Esperar un breve tiempo (por ejemplo, 500 ms) antes de realizar el desplazamiento suave
  setTimeout(() => {
    // Obtener la posición de la sección en la página de inicio
    const targetSection = document.getElementById(sectionId);
    const targetPosition = targetSection?.getBoundingClientRect().top ?? 0;

    // Realizar el desplazamiento suave a la posición de la sección en la página de inicio
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }, 1000);
};

export default handleNavItemClick;
