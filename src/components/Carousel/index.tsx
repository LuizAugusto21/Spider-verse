import HeroDetails from "../HeroDetails";

import styles from "./carousel.module.scss";

import { IHeroData } from "@/interfaces/heroes";

interface Iprops {
  heroes: IHeroData[];
  activedId: string;
}

export default function Carousel({ heroes, activedId }: Iprops) {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.carousel}>
          <div className={styles.wrapper}>
            Lista com os heróis
          </div>
        </div>

        <div className={styles.details}>
          <HeroDetails data={heroes[0]} />
        </div>
      </div>
    </>
  );
}
