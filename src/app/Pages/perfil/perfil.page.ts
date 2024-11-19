import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any = null;

  constructor(private bd: BdService, private router: Router) { }

  async ngOnInit() {
    this.usuario = await this.bd.obtenerUsuarioActivo();
  }

  async cerrarSesion() {
    await this.bd.cerrarSesion();
    this.usuario = null;
    this.router.navigate(['/home']);
  }

}