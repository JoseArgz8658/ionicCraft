import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.page.html',
  styleUrls: ['./create-usuarios.page.scss'],
})
export class CreateUsuariosPage implements OnInit {
    usuario_tipo: string = "";
    usuario_apodo: string = "";
    usuario_gmail: string = "";
    usuario_password: string = "";

  constructor(private bd: BdService) { }

  ngOnInit() {
  }

  agregar(){
    this.bd.agregarUsuarios(this.usuario_tipo, this.usuario_apodo, this.usuario_gmail, this.usuario_password);
  }

}
