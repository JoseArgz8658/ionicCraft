import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUsuariosPageRoutingModule } from './create-usuarios-routing.module';

import { CreateUsuariosPage } from './create-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUsuariosPageRoutingModule
  ],
  declarations: [CreateUsuariosPage]
})
export class CreateUsuariosPageModule {}
