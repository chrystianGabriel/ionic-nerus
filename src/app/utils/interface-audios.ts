export class Audios{
    private nome:string;
    private path:string;
    private intervalo:number;

    constructor(){
      this.nome = "";
      this.path = "";
      this.intervalo = 20;
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


//outros Metodos

}
