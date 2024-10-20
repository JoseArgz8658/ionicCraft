import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadUsuariosPageRoutingModule } from './read-usuarios-routing.module';

import { ReadUsuariosPage } from './read-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadUsuariosPageRoutingModule
  ],
  declarations: [ReadUsuariosPage]
})
export class ReadUsuariosPageModule {}
