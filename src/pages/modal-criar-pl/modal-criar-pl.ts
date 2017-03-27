import { Component } from '@angular/core';
import { ViewController,ModalController} from 'ionic-angular';
import {ModalAdicionarAudiosPage} from '../modal-adicionar-audios/modal-adicionar-audios';
import {PlayList} from '../../app/utils/classe-playList';
import {SingletonPlayLists} from '../../app/utils/classe-singleton-playlists';

/*
  Generated class for the ModalCriarPL page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-criar-pl',
  templateUrl: 'modal-criar-pl.html'
})
export class ModalCriarPLPage {


  private playList : PlayList;
  private singleton:SingletonPlayLists;
  private horaDeParada:string;
  private intervalo;
  constructor(public viewCtrl:ViewController,public modalCtrl:ModalController) {
    this.playList = new PlayList();
    this.singleton = SingletonPlayLists.getInstance();
    let date = new Date();
    this.horaDeParada = "23:00";
    this.intervalo = 15;
  }
  cadastrarAudios(){
    let modal = this.modalCtrl.create(ModalAdicionarAudiosPage,this.playList.getAudios());
    modal.onDidDismiss(data =>{
      if(data){
        this.insertAudios(data);
      }
    });
    modal.present();
  }

  insertDados(nome:string,tempo:string,intervalo:number){
    this.playList.setNome(nome);
    if(tempo)this.playList.setTempo(tempo); //so seta o tempo, caso o usuario inserir algum, se nao o tempo fica em 23:00
    if(intervalo) this.playList.setIntervaloDeRepeticao(intervalo);
  }
  insertAudios(audio){
    this.playList.setAudios(audio);
  }

  salvarPlayList(nome,tempo,intervalo){
    this.insertDados(nome,tempo,intervalo)
    this.singleton.insertPlayList(this.playList);
    this.viewCtrl.dismiss();
  }


}
