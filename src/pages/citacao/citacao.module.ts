import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitacaoPage } from './citacao';

@NgModule({
  declarations: [
    CitacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CitacaoPage),
  ],
})
export class CitacaoPageModule {}
