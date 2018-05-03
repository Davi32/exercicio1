import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Citacao } from "../../dados/citacao.interface";
import { CitacoesService } from "../../services/citacoes";
import { CitacaoPage } from "../citacao/citacao";



@IonicPage()
@Component({
  selector: 'page-favoritas',
  templateUrl: 'favoritas.html',
})
export class FavoritasPage {

  citacoes: Citacao[];

  constructor(private citacoesService: CitacoesService,  modalCtrl: ModalController){}

  /* cada vez que entrar na página executa */
  ionViewWillEnter(){
  	this.citacoes = this.citacoesService.getCitacoesFavoritas();
  }

  exibirCitacao(citacao: Citacao){
  	//código para abrir modal
  	const modal = this.modalCtrl.create(CitacaoPage, citacao);
  	modal.present();

  	modal.onDidDismiss((remover: boolean) => {
  		if(remover){
  			this.citacoesService.removerCitacaoFavorita(citacao);
  			//fazer código direto!!!
  			this.citacoes = this.citacoesService.getCitacoesFavoritas();
  		}
  	});
  }


}
