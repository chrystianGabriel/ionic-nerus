import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {SingletonPlayLists} from '../../app/utils/classe-singleton-playlists';
import {PlayList} from '../../app/utils/classe-playList';
@Component({
  selector: 'page-modal-playlits-cadastradas',
  templateUrl: 'modal-playlits-cadastradas.html'
})

export class ModalPlaylitsCadastradasPage {

  private singleton: SingletonPlayLists;
  private playLists: Array<PlayList>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
      this.singleton = SingletonPlayLists.getInstance();
      this.playLists = this.singleton.getPlayLists();

  }

  audioSelect(playList:PlayList){
    this.viewCtrl.dismiss(playList);
  }


}
