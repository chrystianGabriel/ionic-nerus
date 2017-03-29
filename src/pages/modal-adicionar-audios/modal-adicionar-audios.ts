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
  constructor(public toastCtrl:ToastController,public navParams: NavParams,public modalCtrl:ModalController,public viewCtrl:ViewController,public alertCtrl:AlertController) {
      this.audios = new Array<Audios>();


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

  }
  setAudios(){
    this.viewCtrl.dismiss(this.audios);
  }

  removerAudio(nome:string){

    for(let i = 0; i < this.audios.length;i++){
      if(this.audios[i].getNome() == nome) this.audios.splice(i,1);
    }

  }

  setAudioMestre(audio:Audios){
    let toastE = this.toastCtrl.create({message:"Audio Mestre Adicionado",duration:3000,position:'top'});
    let toastD = this.toastCtrl.create({message:"Audio Mestre Removido",duration:3000,position:'top'});
    if(audio.getMestre()){
      toastD.present();
      audio.setMestre(false);
      return;

    }
    toastE.present();
    audio.setMestre(true);
    this.setintervaloMestre(audio);
    return;

  }

  setintervaloMestre(audio:Audios) {
    let alert = this.alertCtrl.create({
  title: 'Intervalo de Reprodução',
  inputs:[
      {
        name: 'intervalo',
        placeholder: 'Intervalo de Reprodução'
      }],
  buttons: [{
    text: 'Ok',
    handler: (data) => {
      let isDigit = Number(data['intervalo']);
      if(!isNaN(isDigit)){
        audio.setIntervalo(data['intervalo']);
        let toast = this.toastCtrl.create({
          message:"Intervalo de Reprodução adicionado",
          duration:1500,
          position:'top'});
          toast.present();

      }else{
        audio.setIntervalo(2);
        let toast = this.toastCtrl.create({
          message:"Intervalo de Reprodução adicionado igual a 2",
          duration:1500,
          position:'top'});
          toast.present();
      }

    }
  }]
});

alert.present();
  }

mudarOrdem(indexes){
  let element = this.audios[indexes.from];
  this.audios.splice(indexes.from, 1);
  this.audios.splice(indexes.to, 0, element);


  }


}
