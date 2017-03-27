import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ModalCriarPLPage} from '../pages/modal-criar-pl/modal-criar-pl';
import {ModalAdicionarAudiosPage} from "../pages/modal-adicionar-audios/modal-adicionar-audios";
import {ModalPlaylitsCadastradasPage} from '../pages/modal-playlits-cadastradas/modal-playlits-cadastradas';
import {ModalDropBoxPage} from '../pages/modal-drop-box/modal-drop-box';
import {Dropbox} from '../providers/dropbox';
import {ModalEditarPlayListPage} from '../pages/modal-editar-play-list/modal-editar-play-list';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalCriarPLPage,
    ModalAdicionarAudiosPage,
    ModalPlaylitsCadastradasPage,
    ModalDropBoxPage,
    ModalEditarPlayListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalCriarPLPage,
    ModalAdicionarAudiosPage,
    ModalPlaylitsCadastradasPage,
    ModalDropBoxPage,
    ModalEditarPlayListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Dropbox]
})
export class AppModule {}
