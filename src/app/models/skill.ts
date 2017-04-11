export class Skill {
  code: string;
  name: string;
  image: string;
  description: string;
  note: number;

  constructor(code: string, name: string, image: string, descripion: string, note: number) {
    this.code = code;
    this.name = name;
    this.image = image;
    this.description = descripion;
    this.note = note;
  }
}
