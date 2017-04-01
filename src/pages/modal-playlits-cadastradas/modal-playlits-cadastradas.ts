import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {SingletonPlayLists} from '../../app/utils/classe-singleton-playlists';
import {PlayList} from '../../app/utils/classe-playList';
import {ModalCriarPLPage} from '../modal-criar-pl/modal-criar-pl';
@Component({
  selector: 'page-modal-playlits-cadastradas',
  templateUrl: 'modal-playlits-cadastradas.html'
})

export class ModalPlaylitsCadastradasPage {

  private singleton: SingletonPlayLists;
  private playLists: Array<PlayList>;
  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
      this.singleton = SingletonPlayLists.getInstance();
      this.playLists = this.singleton.getPlayLists();

  }
  modalCadastrarPlayList(){
    let modal = this.modalCtrl.create(ModalCriarPLPage);
    modal.onDidDismiss(data => {
    });
    modal.present();

  }
  audioSelect(playList:PlayList){
    this.viewCtrl.dismiss(playList);
  }


}
