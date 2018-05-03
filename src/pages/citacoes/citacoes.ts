import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Citacao } from '../../dados/citacao.interface';
import { CitacoesService } from "../../services/citacoes";

@IonicPage()
@Component({
  selector: 'page-citacoes',
  templateUrl: 'citacoes.html',
})
export class CitacoesPage implements OnInit {

	grupoCitacoes: {categoria: string, cutacoes: Citacao[], icone: string};

  constructor(public navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController, private citacoesService: CitacoesService) {}

  ngOnInit(){
  		this.grupoCitacoes = this.navParams.data;
  }

  adicionarAosFavoritos(citacaoSelecionada: Citacao){
  		const alert = this.alertCtrl.create({
      title: 'Citação adicionada',
      subTitle: 'Você tem certeza?',
      message: 'Você tem certeza que deseja adicionar a citação?',
      buttons: [
      {
        text: 'Sim',
        handler: () => {
          this.citacoesService.adicionarCitacaoFavorita(citacaoSelecionada);
        }
      },
      {
        text: 'Não',
        handler: () => {
          console.log ('Cancelar');
        }
      }
      ]
    });

    alert.present();
  }

  removerDosFavoritos(citacao: Citacao){
    this.citacoesService.removerCitacaoFavorita(citacao);
  }

  isFavorita(citacao: Citacao){
    return this.citacoesService.isFavorita(citacao);
  }

}


