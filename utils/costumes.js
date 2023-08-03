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
import lolla from "../app/assets/costumes/lolla.png";
import lollabg from "../app/assets/costumes/lollabg.jpg";
import harley from "../app/assets/costumes/harley.png";
import harleybg from "../app/assets/costumes/harleybg.jpg";
import jocker from "../app/assets/costumes/jocker.png";
import jockerbg from "../app/assets/costumes/jokerbg.jpg";

const costumes = [
  { bg: spiderbg, image: spiderman, alt: "spiderman" },
  { bg: mariobg, image: mario, alt: "mario" },
  { bg: jackbg, image: jack, alt: "jack" },
  { bg: merlinabg, image: merlina, alt: "merlina" },
  { bg: devilbg, image: devil, alt: "devil" },
  { bg: harleybg, image: harley, alt: "harley" },
  { bg: lollabg, image: lolla, alt: "lolla" },
  { bg: jockerbg, image: jocker, alt: "jocker" },
];

export default costumes;
