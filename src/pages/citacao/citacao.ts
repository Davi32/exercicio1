import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-citacao',
  templateUrl: 'citacao.html',
})
export class CitacaoPage {

	autor: string;
	texto: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {}


  onClose(remover = false){
  	this.viewCtrl.dismiss(remover);
  }

  //executa toda vez que a página for carregada
  ionViewDidLoad(){
  	this.autor = this.navParams.get('autor');
  	this.texto = this.navParams.get('texto');
  }

}
