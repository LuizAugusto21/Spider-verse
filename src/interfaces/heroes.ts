export interface IHeroData{
  id: String;
  name: string;
  universe: number;
  details: {
    fullName: string;
    birthday: string;
    homeland: string;
    height: number;
    weight: number;
  }
}