import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-update-usuarios',
  templateUrl: './update-usuarios.page.html',
  styleUrls: ['./update-usuarios.page.scss'],
})
export class UpdateUsuariosPage implements OnInit {
  usuarios: any;

  constructor(private router: Router, private activedoruter: ActivatedRoute, private bd: BdService) {
    this.activedoruter.queryParams.subscribe(res=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuarios = this.router.getCurrentNavigation()?.extras?.state?.['usuario'];
      }
    })
  }

  ngOnInit() {
  }

  update(){
    this.bd.actualizarUsuario(this.usuarios.usuario_id, this.usuarios.usuario_tipo, this.usuarios.usuario_apodo, this.usuarios.usuario_gmail, this.usuarios.usuario_password);
  }

}
