import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario_apodo: string = '';
  usuario_password: string = '';

  showHelp1: boolean = false;
  showHelp2: boolean = false;

  constructor(private bd: BdService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {}

  async iniciarSesion() {
    const usuarioExiste = await this.bd.verificarUsuario(this.usuario_apodo, this.usuario_password);
    if (usuarioExiste) {
      this.mostrarAlerta('Éxito', 'Inicio de sesión exitoso');
      this.router.navigate(['/perfil']);
    } else {
      this.mostrarAlerta('Error', 'Usuario o contraseña incorrectos');
    }
  }

  toggleHelp1() {
    this.showHelp1 = !this.showHelp1;
  }

  toggleHelp2() {
    this.showHelp2 = !this.showHelp2;
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}