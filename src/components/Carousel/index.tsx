"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HeroDetails from "../HeroDetails";
import HeroPicture from "../HeroPicture";

import styles from "./carousel.module.scss";

import { IHeroData } from "@/interfaces/heroes";

enum enPosition {
  FRONT = 0,
  MIDDLE = 1,
  BACK = 2,
}

interface Iprops {
  heroes: IHeroData[];
  activedId: string;
}

export default function Carousel({ heroes, activedId }: Iprops) {
  const [visibleItems, setVisibleItems] = useState<IHeroData[] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(
    heroes.findIndex((hero) => hero.id === activedId) - 1
  );

  useEffect(() => {
    //Formula para que não importa o número, está sempre dentro do Array
    const indexInArrayScope =
      ((activeIndex % heroes.length) + heroes.length) % heroes.length;

    //Dividindo o array para exbir 3 herois
    const visibleItems = [...heroes, ...heroes].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    );
    setVisibleItems(visibleItems);
  }, [heroes, activeIndex]);


  useEffect(() => {
    const htmlEl = document.querySelector("html")
    if (!htmlEl || !visibleItems) {
      return;
    }

    const currentHeroId = visibleItems[enPosition.MIDDLE].id
    htmlEl.style.backgroundImage = `url("/spiders/${currentHeroId}-background.png")`;
    htmlEl.classList.add("hero-page");

    //Quando quiser que o useeffect faça algo quando o componente for desmoantado
    return () => {
      htmlEl.classList.remove("hero-page")
    }

  }, [visibleItems])

  // Altera herói Ativo
  // +1 rotaciona no sentido horário
  //-1 rotaciona no sentido anti-horário
  const handleChangeActiveIndex = (newDirection: number) => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  };

  if (!visibleItems) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <div
            className={styles.wrapper}
            onClick={() => handleChangeActiveIndex(1)}
          >
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, position) => (
                <motion.div
                  key={item.id}
                  className={styles.hero}
                  initial={{ x: -1500, scale: 0.75 }}
                  animate={{ x: 0, ...getItemStyles(position) }}
                  exit={{ x: 0, opacity: 0, scale: 1, left: "-20%" }}
                  transition={{ duration: 0.8 }}
                >
                  <HeroPicture hero={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.details}>
          <HeroDetails data={heroes[0]} />
        </div>
      </div>
    </>
  );
}

const getItemStyles = (position: enPosition) => {
  if (position === enPosition.FRONT) {
    return {
      zIndex: 3,
      filter: "blur(10px)",
      scale: 1.2,
    };
  }

  if (position === enPosition.MIDDLE) {
    return {
      zIndex: 2,
      left: 300,
      scale: 0.8,
      top: "-10%",
    };
  }

  return {
    zIndex: 1,
    filter: "blur(10px)",
    left: 160,
    top: "-20%",
    scale: 0.6,
  };
};
