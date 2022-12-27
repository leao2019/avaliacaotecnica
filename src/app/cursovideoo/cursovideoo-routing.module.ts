import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursovideooPage } from './cursovideoo.page';

const routes: Routes = [
  {
    path: '',
    component: CursovideooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursovideooPageRoutingModule {}
