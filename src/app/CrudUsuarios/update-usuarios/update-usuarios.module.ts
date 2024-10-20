import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateUsuariosPageRoutingModule } from './update-usuarios-routing.module';

import { UpdateUsuariosPage } from './update-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateUsuariosPageRoutingModule
  ],
  declarations: [UpdateUsuariosPage]
})
export class UpdateUsuariosPageModule {}
