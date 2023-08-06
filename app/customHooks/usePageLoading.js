import { useState, useEffect } from "react";
//asdasdasdasd
const usePageLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loadingTimeout;

    const handleLoad = () => {
      setLoading(false);
    };

    // Mostramos el loader inicialmente
    setLoading(true);

    // Inicialmente, establecemos un tiempo de 3 segundos para mostrar el loader
    loadingTimeout = setTimeout(() => {
      handleLoad();
    }, 3000); // Cambia el tiempo según la duración de tus componentes y recursos

    // Luego, si el evento de carga se dispara, cancelamos el tiempo de espera
    // para que el loader no se oculte hasta que el contenido esté listo
    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(loadingTimeout);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return loading;
};

export default usePageLoading;
