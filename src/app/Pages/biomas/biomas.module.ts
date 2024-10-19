import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiomasPageRoutingModule } from './biomas-routing.module';

import { BiomasPage } from './biomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiomasPageRoutingModule
  ],
  declarations: [BiomasPage]
})
export class BiomasPageModule {}
