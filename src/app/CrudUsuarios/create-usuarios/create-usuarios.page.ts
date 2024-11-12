import { Component, OnInit, ViewChild } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';
import { IonContent, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.page.html',
  styleUrls: ['./create-usuarios.page.scss'],
})
export class CreateUsuariosPage implements OnInit {
  @ViewChild('content', { static: false }) content!: IonContent;

  correoExample = "ejemplo@gmail.com";

  usuario_tipo: string = "";
  usuario_apodo: string = "";
  usuario_gmail: string = "";
  usuario_password: string = "";
  usuario_password_confirmation: string = "";

  showHelp1: boolean = false;
  showHelp2: boolean = false;
  showHelp3: boolean = false;
  showHelp4: boolean = false;
  showHelp5: boolean = false;
  showHelp6: boolean = false;

  isPasswordVisible: boolean = false;

  constructor(private bd: BdService, private alertController: AlertController, private router: Router) { }

  ngOnInit() { }

  // Función de validación antes de enviar el formulario
  async agregar() {
    if (this.validarFormulario()) {
      this.bd.agregarUsuarios(this.usuario_tipo, this.usuario_apodo, this.usuario_gmail, this.usuario_password);
      await this.mostrarConfirmacion('Usuario registrado exitosamente.');
      this.router.navigate(['/read.usuarios']);
    } else {
      await this.mostrarError('Por favor, revise los campos e intente nuevamente.');
    }
  }

  // Mostrar mensaje de confirmación
  async mostrarConfirmacion(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Mostrar mensaje de error
  async mostrarError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  // Función de validación de campos
  validarFormulario(): boolean {
    // Validación de tipo de usuario
    if (this.usuario_tipo !== 'admin' && this.usuario_tipo !== 'usuario') {
      this.mostrarError('El tipo de usuario debe ser "admin" o "usuario".');
      return false;
    }

    // Validación del apodo
    const apodoPattern = /^[a-zA-Z0-9_]{4,15}$/;
    if (!apodoPattern.test(this.usuario_apodo)) {
      this.mostrarError('El apodo debe tener entre 4 y 15 caracteres, sin espacios ni caracteres especiales.');
      return false;
    }

    // Validación del correo
    const gmailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!gmailPattern.test(this.usuario_gmail)) {
      this.mostrarError('El correo electrónico no es válido. Debe ser un Gmail válido.');
      return false;
    }

    // Validación de la contraseña
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,99}$/;
    if (!passwordPattern.test(this.usuario_password)) {
      this.mostrarError('La contraseña debe tener al menos 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial.');
      return false;
    }

    // Validación de confirmación de contraseña
    if (this.usuario_password !== this.usuario_password_confirmation) {
      this.mostrarError('Las contraseñas no coinciden.');
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

  toggleHelp6() {
    this.showHelp6 = !this.showHelp6;
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}