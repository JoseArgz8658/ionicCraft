import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  minecraft_bioma_id: string = "";
  bioma_nombre: string = "";
  bioma_descripcion: string = "";

  constructor(private bd: BdService) { }

  ngOnInit() {
  }

  agregar(){
    this.bd.agregarBiomas(this.minecraft_bioma_id, this.bioma_nombre, this.bioma_descripcion);
  }

}
