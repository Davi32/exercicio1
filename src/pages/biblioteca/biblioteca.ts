import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CitacoesPage } from "../citacoes/citacoes"; 

import { Citacao } from "../../dados/citacao.interface";
import citacoes from '../../dados/citacoes';

@IonicPage()
@Component({
  selector: 'page-biblioteca',
  templateUrl: 'biblioteca.html',
})
export class BibliotecaPage implements OnInit{

	citacoesCollection: {categoria: string, citacoes: Citacao[], icone: string}[];

	citacoesPage = CitacoesPage;

	ngOnInit(){
		this.citacoesCollection = citacoes;
	}

}
