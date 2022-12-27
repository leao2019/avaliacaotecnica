import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursovideooPageRoutingModule } from './cursovideoo-routing.module';

import { CursovideooPage } from './cursovideoo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursovideooPageRoutingModule
  ],
  declarations: [CursovideooPage]
})
export class CursovideooPageModule {}
