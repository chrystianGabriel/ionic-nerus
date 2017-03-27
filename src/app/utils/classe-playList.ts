import {Audios} from './interface-audios';
export class PlayList{
  private nome:string;
  private tempo:string;
  private audios:Array<Audios>;
  private codigo:number;
  private intervaloDeRepeticao:number;
  constructor(){
    this.nome = "";
    this.tempo = "23:00";
    this.audios = new Array<Audios>();
    this.gerarCodigo();
    this.intervaloDeRepeticao = 15;
  }

  public setNome(nome:string){
    this.nome = nome;

  }
  public setTempo(tempo:string){
    this.tempo = tempo;
  }


  public setAudios(audios){
    for(let i = 0;i < audios.length;i++){
      this.audios.push(audios[i]);
    }
  }

  public setCodigo(codigo:number){
    this.codigo = codigo;
  }

  public setIntervaloDeRepeticao(intervalo:number){
    this.intervaloDeRepeticao = intervalo;

  }
//Metodos de get
  public getNome(){
    return this.nome;

  }
  public getTempo(){
    return this.tempo;
  }

  public getCodigo(){
    return this.codigo;
  }

  public getAudios(){
    return this.audios;
  }

  public getIntervaloDeRepeticao(){
      return this.intervaloDeRepeticao;

  }


//outros metodos
public gerarCodigo(){
    let i = 5;
    let max = 9;
    let min = 0;

    let id:number = Math.floor(Math.random() * (max - min)) + min;
    while(i > 0){
      id *= 10;
      id += Math.floor(Math.random() * (max - min)) + min;
      i--;

    }

    id*=10 + this.calcularDigitoVerificador(id);
    this.codigo = id;
  }

  private calcularDigitoVerificador(id:number){
    let coeficiente = id;
    let resto;
    let soma = 0;
    let multiplicador = 2;
    while(coeficiente > 0){
      resto = coeficiente%10;
      soma += resto * multiplicador;
      coeficiente = Math.trunc(coeficiente/10);
      multiplicador++;
    }

    soma = (11 - soma%11);
    return soma;

  }



}
