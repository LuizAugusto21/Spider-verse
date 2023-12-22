import { IHeroData } from "@/interfaces/heroes";

interface Iprops {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: Iprops) {
  return (
    <>
      <h1>Personagens</h1>
      {heroes.map((hero) => (
        <p key={hero.id}>{hero.name}</p>
      ))
      }
    </>
  );
}
