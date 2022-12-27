import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cursovideo3Page } from './cursovideo3.page';

const routes: Routes = [
  {
    path: '',
    component: Cursovideo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cursovideo3PageRoutingModule {}
