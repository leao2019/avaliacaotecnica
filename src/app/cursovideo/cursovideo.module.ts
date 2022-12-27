import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursovideoPageRoutingModule } from './cursovideo-routing.module';

import { CursovideoPage } from './cursovideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursovideoPageRoutingModule
  ],
  declarations: [CursovideoPage]
})
export class CursovideoPageModule {}
