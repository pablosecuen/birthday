import { useState, useEffect } from "react";

const usePageLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Inicialmente, marcamos la página como cargada después de un tiempo determinado
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Cambia el tiempo según la duración de tus componentes y recursos

    // Luego, si el evento de carga se dispara, cancelamos el tiempo de espera y marcamos la página como cargada
    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(loadingTimeout);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return loading;
};

export default usePageLoading;
