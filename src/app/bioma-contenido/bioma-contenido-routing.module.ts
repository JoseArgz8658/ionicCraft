import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiomaContenidoPage } from './bioma-contenido.page';

const routes: Routes = [
  {
    path: '',
    component: BiomaContenidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiomaContenidoPageRoutingModule {}
