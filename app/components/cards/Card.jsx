"use client";
import React, { useEffect, useState, useRef } from "react";
import costumes from "../../../utils/costumes";
import Image from "next/image";

function Card() {
  const articleRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      if (isMobile) {
        articleRefs.current.forEach((articleRef) => {
          if (isElementInViewport(articleRef)) {
            articleRef.classList.add("article-hover");
          } else {
            articleRef.classList.remove("article-hover");
          }
        });
      }
    }

    // Determinar si estamos en un dispositivo móvil
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Agregar el evento de scroll cuando estemos en mobile
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // También verificar el estado al cargar la página
    }

    // Limpiar eventos al desmontar el componente
    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {costumes.map((costume, index) => (
        <article key={index} ref={(el) => (articleRefs.current[index] = el)}>
          <Image src={costume.bg} alt={`${costume.alt} bg`} />
          <Image src={costume.image} alt={costume.alt} />
        </article>
      ))}
    </div>
  );
}

export default Card;
