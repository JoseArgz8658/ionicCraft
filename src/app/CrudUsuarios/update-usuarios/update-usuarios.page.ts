import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-usuarios',
  templateUrl: './update-usuarios.page.html',
  styleUrls: ['./update-usuarios.page.scss'],
})
export class UpdateUsuariosPage implements OnInit {
  usuarios: any;

  showHelp1: boolean = false;
  showHelp2: boolean = false;
  showHelp3: boolean = false;
  showHelp4: boolean = false;
  showHelp5: boolean = false;

  isPasswordVisible1: boolean = false;
  isPasswordVisible2: boolean = false;

  correoExample = "ejemplo@gmail.com";
  confirmarContrasena: string = '';

  constructor(private router: Router, private activedoruter: ActivatedRoute, private bd: BdService, private alertController: AlertController) {
    this.activedoruter.queryParams.subscribe(res => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuarios = this.router.getCurrentNavigation()?.extras?.state?.['usuario'];
      }
    });
  }

  ngOnInit() {}

  async update() {
    if (this.validarFormulario()) {
      this.bd.actualizarUsuario(this.usuarios.usuario_id, this.usuarios.usuario_tipo, this.usuarios.usuario_apodo, this.usuarios.usuario_gmail, this.usuarios.usuario_password);
      await this.mostrarConfirmacion('Usuario modificado exitosamente.');
      this.router.navigate(['/home']);
    } else {
      await this.mostrarError('Por favor, revise los campos e intente nuevamente.');
    }
  }

  async mostrarConfirmacion(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  async mostrarError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  validarFormulario(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.usuarios.usuario_gmail)) {
      this.mostrarError("El Gmail no es válido.");
      return false;
    }

    if (this.usuarios.usuario_password.length < 6) {
      this.mostrarError("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
  
    if (this.usuarios.usuario_password !== this.confirmarContrasena) {
      this.mostrarError("Las contraseñas no coinciden.");
      return false;
    }
  
    return true;
  }

  toggleHelp1() {
    this.showHelp1 = !this.showHelp1;
  }

  toggleHelp2() {
    this.showHelp2 = !this.showHelp2;
  }

  toggleHelp3() {
    this.showHelp3 = !this.showHelp3;
  }

  toggleHelp4() {
    this.showHelp4 = !this.showHelp4;
  }

  toggleHelp5() {
    this.showHelp5 = !this.showHelp5;
  }

  togglePasswordVisibility1() {
    this.isPasswordVisible1 = !this.isPasswordVisible1;
  }

  togglePasswordVisibility2() {
    this.isPasswordVisible2 = !this.isPasswordVisible2;
  }
}