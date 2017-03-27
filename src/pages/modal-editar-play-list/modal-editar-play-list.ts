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
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    this.playList = new PlayList();
    this.playList.setNome(this.navParams.get('nome'));
    this.playList.setTempo(this.navParams.get('tempo'));
    this.playList.setIntervaloDeRepeticao(this.navParams.get('intervaloDeRepeticao'));
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

}
