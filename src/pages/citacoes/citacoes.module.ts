import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitacoesPage } from './citacoes';

@NgModule({
  declarations: [
    CitacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(CitacoesPage),
  ],
})
export class CitacoesPageModule {}
