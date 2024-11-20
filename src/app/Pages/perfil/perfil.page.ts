import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BdService } from 'src/app/services/bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any = null;

  constructor(private bd: BdService, private nativeStorage: NativeStorage, private router: Router) { }

  async ngOnInit() {
    this.usuario = await this.bd.obtenerUsuarioActivo();
  }

  async cerrarSesion() {
    await this.bd.cerrarSesion();
    this.usuario = null;
    this.router.navigate(['/perfil']);
  }

  refreshPage() {
    location.reload();
  }

}