import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cursovideo3PageRoutingModule } from './cursovideo3-routing.module';

import { Cursovideo3Page } from './cursovideo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cursovideo3PageRoutingModule
  ],
  declarations: [Cursovideo3Page]
})
export class Cursovideo3PageModule {}
