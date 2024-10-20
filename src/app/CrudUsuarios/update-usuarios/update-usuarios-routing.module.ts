import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateUsuariosPage } from './update-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateUsuariosPageRoutingModule {}
