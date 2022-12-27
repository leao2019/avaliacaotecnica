import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacaosenhaPageRoutingModule } from './recuperacaosenha-routing.module';

import { RecuperacaosenhaPage } from './recuperacaosenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacaosenhaPageRoutingModule
  ],
  declarations: [RecuperacaosenhaPage]
})
export class RecuperacaosenhaPageModule {}
