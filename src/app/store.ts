export class Eleve {
  public id: number;

  public nomDeClasse: string;

  public nom: string;

  public prenom: string;

  public age: number;

  public filiere: string;

  public description: string;

  public email: string;

  constructor(id: number,
              nomDeClasse: string,
              nom: string,
              prenom: string,
              age: number,
              filiere: string,
              description: string,
              email: string) {
    this.id = id;
    this.nomDeClasse = nomDeClasse;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.filiere = filiere;
    this.description = description;
    this.email = email;
  }

  public getInitiale(): Eleve {
    this.nom = this.nom.substr(0, 1);
    return this;
  }
}




