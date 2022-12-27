import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdcursoPage } from './adcurso.page';

const routes: Routes = [
  {
    path: '',
    component: AdcursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdcursoPageRoutingModule {}
