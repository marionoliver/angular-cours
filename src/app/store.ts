export class Eleve {
  private _nomDeClasse: string;
  public get nomDeClasse(): string {
    return this._nomDeClasse;
  }
  public set nomDeClasse(value: string) {
    this._nomDeClasse = value;
  }

  private _nom: string;
  public get nom(): string {
    return this._nom;
  }
  public set nom(value: string) {
    this._nom = value;
  }

  private _prenom: string;
  public get prenom(): string {
    return this._prenom;
  }
  public set prenom(value: string) {
    this._prenom = value;
  }

  private _age: number;
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }

  private _filiere: string;
  public get filiere(): string {
    return this._filiere;
  }
  public set filiere(value: string) {
    this._filiere = value;
  }

  private _description: string;
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  private _email: string;
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  constructor(nomDeClasse: string,
              nom: string,
              prenom: string,
              age: number,
              filiere: string,
              description: string,
              email: string) {
    this.nomDeClasse = nomDeClasse;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.filiere = filiere;
    this.description = description;
    this.email = email;
  }
}

const eleve1: Eleve = new Eleve('MBA1 Expert Web et Digital', 'Stéphant', 'Thomas', 21, 'filiere1', 'description1', 'pouet@pouet.fr');
const eleve2: Eleve = new Eleve('MBA1 Expert Web et Digital', 'Deport', 'Antoine', 21, 'filiere2', 'description2', 'pouet@pouet.fr');
const eleve3: Eleve = new Eleve('MBA1 Expert Web et Digital', 'Demay', 'Steeven', 12, 'filiere3', 'description3', 'pouet@pouet.fr');
const eleve4: Eleve = new Eleve('MBA1 Expert Web et Digital', 'Olivier', 'Tom', 30, 'filiere4', 'description4', 'pouet@pouet.fr');
const eleve5: Eleve = new Eleve('MBA1 Expert Web et Digital', 'Fougeray', 'Marie-Cécile', 54, 'filiere5', 'description5', 'pouet@pouet.fr');
const eleve6: Eleve = new Eleve('MBA1 Expert Web et Digital', 'Oliver', 'Marion', 22, 'filiere6', 'description6', 'pouet@pouet.fr');

export const eleves: Array<Eleve> = new Array(eleve1, eleve2, eleve3, eleve4, eleve5, eleve6);
