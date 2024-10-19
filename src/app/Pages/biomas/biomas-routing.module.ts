import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiomasPage } from './biomas.page';

const routes: Routes = [
  {
    path: '',
    component: BiomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiomasPageRoutingModule {}
