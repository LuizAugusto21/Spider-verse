"use client";

import { useEffect, useState } from "react";

import HeroDetails from "../HeroDetails";
import HeroPicture from "../HeroPicture";

import styles from "./carousel.module.scss";

import { IHeroData } from "@/interfaces/heroes";

interface Iprops {
  heroes: IHeroData[];
  activedId: string;
}

export default function Carousel({ heroes, activedId }: Iprops) {
  const [visibleItems, setVisibleItems] = useState<IHeroData[] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(
    heroes.findIndex((hero) => hero.id === activedId)
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

  if (!visibleItems) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={styles.wrapper}>
            {visibleItems.map((item) => (
              <div key={item.id} className={styles.hero}>
                <HeroPicture hero={item} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.details}>
          <HeroDetails data={heroes[0]} />
        </div>
      </div>
    </>
  );
}
