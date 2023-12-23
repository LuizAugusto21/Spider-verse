import styles from "./heroesList.module.scss";

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";

interface Iprops {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: Iprops) {
  return (
    <>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>
        Personagens
      </h1>
    </>
  );
}
