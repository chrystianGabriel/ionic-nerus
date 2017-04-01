import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {PlayList} from '../../app/utils/classe-playList';
import {Audios} from '../../app/utils/interface-audios';
/*
  Generated class for the ModalEditarPlayList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-editar-play-list',
  templateUrl: 'modal-editar-play-list.html'
})
export class ModalEditarPlayListPage {

  private playList;
  private horario;
  private intervalo;
  private nome;
  private audios:Array<Audios>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    this.playList = new PlayList();
    this.playList.setNome(this.navParams.get('nome'));
    this.playList.setTempo(this.navParams.get('tempo'));
    this.playList.setIntervaloDeRepeticao(this.navParams.get('intervaloDeRepeticao'));
    this.audios = this.navParams.get('audios');
    this.horario = this.playList.getTempo();
    this.intervalo = this.playList.getIntervaloDeRepeticao();
    this.nome = this.playList.getNome();
  }

salvarAltarecoes(nome:string,tempo:string,intervalo:number){
  this.playList.setNome(nome);
  this.playList.setTempo(tempo);
  this.playList.setIntervaloDeRepeticao(intervalo);
  this.viewCtrl.dismiss(this.playList);

}
onDrag(item:any,audio:Audios){
  let tempo = new Date();
  let segundos = tempo.getSeconds()
  if(item.getSlidingPercent() > 0.9){
    this.removerAudio(audio.getNome());
  }

}
mudarOrdem(indexes){
  let element = this.audios[indexes.from];
  this.audios.splice(indexes.from, 1);
  this.audios.splice(indexes.to, 0, element);


  }
removerAudio(nome:string){

  for(let i = 0; i < this.audios.length;i++){
    if(this.audios[i].getNome() == nome) this.audios.splice(i,1);
  }

}
}
