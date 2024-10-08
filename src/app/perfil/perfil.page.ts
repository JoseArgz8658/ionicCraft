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
    const nickname = localStorage.getItem('nickname');
    if (nickname) {
      this.usuarioActivo = JSON.parse(nickname);
    } else {
      this.usuarioActivo = null;
    }
  }

  async cerrarSesion() {
    localStorage.removeItem('nickname');
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