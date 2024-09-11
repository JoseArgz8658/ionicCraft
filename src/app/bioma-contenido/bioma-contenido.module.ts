import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiomaContenidoPageRoutingModule } from './bioma-contenido-routing.module';

import { BiomaContenidoPage } from './bioma-contenido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiomaContenidoPageRoutingModule
  ],
  declarations: [BiomaContenidoPage]
})
export class BiomaContenidoPageModule {}
