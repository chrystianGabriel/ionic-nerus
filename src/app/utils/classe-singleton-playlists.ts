import {PlayList} from './classe-playList';

export class SingletonPlayLists{
  private playLists:Array<PlayList> = new Array<PlayList>();
  private static singleton: SingletonPlayLists;

  public static getInstance(){
    if(!this.singleton){
      this.singleton =  new SingletonPlayLists();
    }
    return this.singleton;
  }
  public insertPlayList(playList:PlayList){
    this.playLists.push(playList);
  }
  public getPlayLists(){
    return this.playLists;
  }
}
