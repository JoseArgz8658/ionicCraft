import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUsuariosPage } from './create-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: CreateUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateUsuariosPageRoutingModule {}
