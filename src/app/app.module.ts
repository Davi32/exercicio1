import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BibliotecaPage } from '../pages/biblioteca/biblioteca';
import { CitacaoPage } from '../pages/citacao/citacao';
import { CitacoesPage } from '../pages/citacoes/citacoes';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { FavoritasPage } from '../pages/favoritas/favoritas';
import { TabsPage } from '../pages/tabs/tabs';
import { CitacoesService } from "../services/citacoes";


@NgModule({
  declarations: [
    MyApp,
    BibliotecaPage,
    CitacaoPage,
    CitacoesPage,
    ConfiguracoesPage,
    FavoritasPage,
    TabsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BibliotecaPage,
    CitacaoPage,
    CitacoesPage,
    ConfiguracoesPage,
    FavoritasPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CitacoesService
  ]
})
export class AppModule {}
