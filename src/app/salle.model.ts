
export class Salle {
  id: number;
  nom: string;
  niveau: number;
  specialisations: Array<string>;

  constructor(
    id: number,
    nom: string,
    niveau: number,
    specialisations: Array<string>) {
      this.id = id;
      this.nom = nom;
      this.niveau = niveau;
      this.specialisations = specialisations;
    }
}
