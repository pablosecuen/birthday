export const handleSmoothScroll = (event, targetId) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const offsetTop = targetElement.getBoundingClientRect().top;
    const headerHeight = 16; // Ajusta esto al tamaño de tu barra de navegación
    const totalOffset = offsetTop - headerHeight;

    window.scrollBy({
      top: totalOffset,
      behavior: "smooth",
    });
  }
};
