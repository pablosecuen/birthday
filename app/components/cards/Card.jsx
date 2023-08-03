"use client";
import React from "react";
import costumes from "../../../utils/costumes";
import Image from "next/image";

function Card() {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {costumes.map((costume, index) => (
        <article key={index}>
          <Image src={costume.bg} alt={`${costume.alt} bg`} />
          <Image src={costume.image} alt={costume.alt} />
        </article>
      ))}
    </div>
  );
}

export default Card;
