import { Component } from '@angular/core';
import {ToastController,NavController, NavParams,ModalController,ViewController,AlertController} from 'ionic-angular';
import {ModalDropBoxPage} from '../modal-drop-box/modal-drop-box';
import {Audios} from "../../app/utils/interface-audios";
@Component({
  selector: 'page-modal-adicionar-audios',
  templateUrl: 'modal-adicionar-audios.html'
})
export class ModalAdicionarAudiosPage {

  private audios:Array<Audios>;
  private opAudios:string;
  constructor(public toastCtrl:ToastController,public navParams: NavParams,public modalCtrl:ModalController,public viewCtrl:ViewController,public alertCtrl:AlertController) {
      this.audios = new Array<Audios>();
      this.opAudios = "check";

  }
  onDrag(item:any,audio:Audios){
    let tempo = new Date();
    let segundos = tempo.getSeconds()
    if(item.getSlidingPercent() > 0.9){
      this.removerAudio(audio.getNome());
    }
  }
  getAudios(){
      let modal  = this.modalCtrl.create(ModalDropBoxPage);
      modal.onDidDismiss(data =>{
        if(data){
          for(let i = 0; i<data.length;i++){
            this.audios.push(data[i]);
          }
        }
      });
      modal.present();
      this.opAudios = "check";

  }
  setAudios(){
  this.viewCtrl.dismiss(this.audios);
}

  removerAudio(nome:string){

    for(let i = 0; i < this.audios.length;i++){
      if(this.audios[i].getNome() == nome) this.audios.splice(i,1);
    }

  }

  

mudarOrdem(indexes){
  let element = this.audios[indexes.from];
  this.audios.splice(indexes.from, 1);
  this.audios.splice(indexes.to, 0, element);


  }


}
