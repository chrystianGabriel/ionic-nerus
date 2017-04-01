import { Component } from '@angular/core';
import { NavController,ModalController,ToastController,AlertController} from 'ionic-angular';
import {ModalPlaylitsCadastradasPage} from '../modal-playlits-cadastradas/modal-playlits-cadastradas';
import {PlayList} from '../../app/utils/classe-playList';
import {Audios} from '../../app/utils/interface-audios';
import {ModalDropBoxPage} from '../modal-drop-box/modal-drop-box';
import {ModalEditarPlayListPage} from '../modal-editar-play-list/modal-editar-play-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private playList:PlayList;
  private audios:Array<Audios>;
  private opAudios;
  constructor(public alertCtrl:AlertController,public navCtrl: NavController,public modalCtrl:ModalController,public toastCtrl:ToastController) {
    this.opAudios = "check";
  }


  modalPlayListCasdastradas(){
    let modal = this.modalCtrl.create(ModalPlaylitsCadastradasPage);
    modal.onDidDismiss(data=>{
        if(data){
          this.playList = data;
          this.audios  = this.playList.getAudios();

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
    this.opAudios = "check";
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





}
