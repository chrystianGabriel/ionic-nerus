export class Audios{
    private nome:string;
    private path:string;
    private intervalo:number;
    private mestre:boolean;

    constructor(){
      this.nome = "";
      this.path = "";
      this.intervalo = 0;
    }

//sets
    public setNome(nome:string){
      this.nome = nome;
    }
    public setPath(path:string){
      this.path = path;
    }
    public setIntervalo(intervalo:number){
      this.intervalo = intervalo;
    }

    public setMestre(mestre:boolean){
      this.mestre =  mestre;
    }

//gets
    public getNome(){
      return this.nome;
    }
    public getPath(){
      return this.path;
    }
    public getIntervalo(){
      return this.intervalo;
    }

    public getMestre(){
      return this.mestre;
    }

//outros Metodos

}
