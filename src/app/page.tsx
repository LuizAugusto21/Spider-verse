import styles from "./page.module.scss";

import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";

async function getHeroes(): Promise<{ data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);
  if (!res.ok) {
    throw new Error("Failed to request heroes list");
  }

  return res.json();
}

export default async function Home() {
  const heroes = await getHeroes();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
