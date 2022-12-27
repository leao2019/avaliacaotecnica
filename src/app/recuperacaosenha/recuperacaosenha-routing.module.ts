import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacaosenhaPage } from './recuperacaosenha.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacaosenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacaosenhaPageRoutingModule {}
