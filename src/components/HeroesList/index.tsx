import styles from "./heroesList.module.scss";
import HeroPicture from "./../HeroPicture/index";

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

      <section className={styles.heroes}>
        {heroes.map((hero) => (
          <div key={hero.id} className={`${styles.imageContainer} ${styles[hero.id]}`}>
            <HeroPicture hero={hero}></HeroPicture>
          </div>
        ))}
      </section>
    </>
  );
}
