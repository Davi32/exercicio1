import { Component } from '@angular/core';

import { FavoritasPage } from '../favoritas/favoritas';
import { BibliotecaPage } from '../biblioteca/biblioteca';

@Component({
		selector: 'page-tabs',
		template: `
		<ion-tabs selectedIndex="1">
			<ion-tab [root]="favoritasPage" tabTitle="Favoritas" tabIcon="star"> </ion-tab>
			<ion-tab [root]="bibliotecaPage" tabTitle="Biblioteca" tabIcon="book"> </ion-tab>
		</ion-tabs>
		`
})
export class TabsPage{

	favoritasPage = FavoritasPage;
	bibliotecaPage = BibliotecaPage;

}