import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,ViewController } from 'ionic-angular';
import { Dropbox } from '../../providers/dropbox';
import {Audios} from "../../app/utils/interface-audios";
/*
  Generated class for the ModalDropBox page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-drop-box',
  templateUrl: 'modal-drop-box.html'
})
export class ModalDropBoxPage {
  depth: number = 0;
  folders: any;
  audios:Array<Audios>;
  constructor(public navCtrl: NavController, public dropbox: Dropbox, public loadingCtrl: LoadingController,public viewCtrl:ViewController) {
      this.audios = new Array<Audios>();

  }


  ionViewDidLoad(){

      this.dropbox.setAccessToken("K3oI7KIdrqAAAAAAAAAAamTMsHTeR2yAyZKUQaWJjhC_HZExg7DSeIJZFiZ0AjHs");
      this.folders = [];

      let loading = this.loadingCtrl.create({
        content: 'Syncing from Dropbox...'
      });

      loading.present();

      this.dropbox.getFolders().subscribe(data => {
        this.folders = data.entries;
        loading.dismiss();
      }, (err) => {
        console.log(err);
      });

  }

  openFolder(path){

    let loading = this.loadingCtrl.create({
      content: 'Syncing from Dropbox...'
    });

    loading.present();

    this.dropbox.getFolders(path).subscribe(data => {
      this.folders = data.entries;
      this.depth++;
      loading.dismiss();
    }, err => {
      console.log(err);
    });

  }

  goBack(){

    let loading = this.loadingCtrl.create({
      content: 'Syncing from Dropbox...'
    });

    loading.present();

    this.dropbox.goBackFolder().subscribe(data => {
      this.folders = data.entries;
      this.depth--;
      loading.dismiss();
    }, err => {
      console.log(err);
    });

  }

  selectAudios(nomeAudio:string,pathAudio:string){

      for(let i = 0;i<this.audios.length;i++){

        if(nomeAudio == this.audios[i].getNome()){
          this.audios.splice(i,1);
          return;

        }


      }
      let audio = new Audios();
      audio.setNome(nomeAudio);
      audio.setPath(pathAudio);
      this.audios.push(audio);
      return;

  }

  dowloadAudios(){
    this.viewCtrl.dismiss(this.audios);
  }

}
