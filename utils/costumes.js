import React from "react";
import Image from "next/image";

import spiderman from "../app/assets/costumes/spider.png";
import spiderbg from "../app/assets/costumes/spiderbg.jpg";
import mario from "../app/assets/costumes/mario.png";
import mariobg from "../app/assets/costumes/mariobg.jpg";
import jack from "../app/assets/costumes/jack.png";
import jackbg from "../app/assets/costumes/jackbg.jpg";
import merlina from "../app/assets/costumes/merlina.png";
import merlinabg from "../app/assets/costumes/merlinabg.jpg";
import devil from "../app/assets/costumes/devil.png";
import devilbg from "../app/assets/costumes/devilbg.jpg";

const costumes = [
  { bg: spiderbg, image: spiderman, alt: "spiderman" },
  { bg: mariobg, image: mario, alt: "mario" },
  { bg: jackbg, image: jack, alt: "jack" },
  { bg: merlinabg, image: merlina, alt: "merlina" },
  { bg: devilbg, image: devil, alt: "devil" },
];

export default costumes;
