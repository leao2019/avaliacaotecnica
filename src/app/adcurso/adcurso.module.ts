import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdcursoPageRoutingModule } from './adcurso-routing.module';

import { AdcursoPage } from './adcurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdcursoPageRoutingModule
  ],
  declarations: [AdcursoPage]
})
export class AdcursoPageModule {}
