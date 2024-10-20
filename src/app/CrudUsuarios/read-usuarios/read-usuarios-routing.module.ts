import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadUsuariosPage } from './read-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ReadUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadUsuariosPageRoutingModule {}
