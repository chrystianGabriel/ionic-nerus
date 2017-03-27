import { Component } from '@angular/core';
import { NavController,ModalController} from 'ionic-angular';
import {ModalCriarPLPage} from '../modal-criar-pl/modal-criar-pl';
import {ModalPlaylitsCadastradasPage} from '../modal-playlits-cadastradas/modal-playlits-cadastradas';
import {PlayList} from '../../app/utils/classe-playList';
import {Audios} from '../../app/utils/interface-audios';
import {ModalDropBoxPage} from '../modal-drop-box/modal-drop-box';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private playList:PlayList;
  private audios:Array<Audios>;
  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

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
  gerarNovoCodigo(){
    this.playList.gerarCodigo();
  }

  removerAudio(nome:string){

    for(let i = 0; i < this.audios.length;i++){
      if(this.audios[i].getNome() == nome) this.audios.splice(i,1);
    }

  }

}
