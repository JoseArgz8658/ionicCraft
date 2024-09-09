import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarioActivo: any = null;

  constructor(public alertController: AlertController,
    private router: Router) {}

  ngOnInit() {
    this.verificarSesionActiva();
  }

  verificarSesionActiva() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.usuarioActivo = JSON.parse(usuario);
    } else {
      this.usuarioActivo = null;
    }
  }

  async cerrarSesion() {
    localStorage.removeItem('usuario');
    this.usuarioActivo = null;
    const alert = await this.alertController.create({
      header: 'Sesión cerrada',
      message: 'Has cerrado sesión correctamente.',
      buttons: ['Aceptar']
    });
    await alert.present();

    this.router.navigate(['home']);
  }
}