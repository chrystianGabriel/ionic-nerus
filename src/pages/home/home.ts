import { Component } from '@angular/core';
import { NavController,ModalController,ToastController,AlertController} from 'ionic-angular';
import {ModalCriarPLPage} from '../modal-criar-pl/modal-criar-pl';
import {ModalPlaylitsCadastradasPage} from '../modal-playlits-cadastradas/modal-playlits-cadastradas';
import {PlayList} from '../../app/utils/classe-playList';
import {Audios} from '../../app/utils/interface-audios';
import {ModalDropBoxPage} from '../modal-drop-box/modal-drop-box';
import {ModalEditarPlayListPage} from '../modal-editar-play-list/modal-editar-play-list';
import {FireBase} from '../../app/utils/classe-firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private playList:PlayList;
  private audios:Array<Audios>;
  private firebase:FireBase;
  constructor(public alertCtrl:AlertController,public navCtrl: NavController,public modalCtrl:ModalController,public toastCtrl:ToastController) {
    //this.firebase = new FireBase();
  }

  modalCadastrarPlayList(){
    let modal = this.modalCtrl.create(ModalCriarPLPage);
    modal.onDidDismiss(data => {
    });
    modal.present();

  }
  modalPlayListCasdastradas(){
    let modal = this.modalCtrl.create(ModalPlaylitsCadastradasPage);
    modal.onDidDismiss(data=>{
        if(data){
          this.playList = data;
          this.audios  = this.playList.getAudios();
          //this.firebase.setPlayList(this.playList);

        }
    })
    modal.present();
  }
  modalDropBox(){
    let modal = this.modalCtrl.create(ModalDropBoxPage);
    modal.onDidDismiss((data)=> {
      if(data){
        for(let i = 0; i<data.length;i++){
          this.audios.push(data[i]);
        }
      }
    });
    modal.present();
  }

  ModalEditarPlayList(){
    let modal = this.modalCtrl.create(ModalEditarPlayListPage,this.playList);
    modal.onDidDismiss((data)=> {
      if(data){
        alert(data.getNome());
        this.playList.setNome(data.getNome());
        this.playList.setTempo(data.getTempo());
        this.playList.setIntervaloDeRepeticao(data.getIntervaloDeRepeticao());
      }
    });
    modal.present();
  }

  gerarNovoCodigo(){
    this.playList.gerarCodigo();
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
