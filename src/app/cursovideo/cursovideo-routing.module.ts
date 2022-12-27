import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursovideoPage } from './cursovideo.page';

const routes: Routes = [
  {
    path: '',
    component: CursovideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursovideoPageRoutingModule {}
