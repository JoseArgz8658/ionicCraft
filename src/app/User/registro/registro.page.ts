import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioRegistro = this.fb.group({
      'nickname': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
        Validators.pattern(/^[a-zA-Z0-9_]+$/)
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
      ]),
      'confirmPassword': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar() {
    var f = this.formularioRegistro.value;
  
    let missingFields: string[] = [];
  
    if (this.formularioRegistro.controls['nickname'].invalid) {
      missingFields.push('Nombre de Usuario');
    }
    if (this.formularioRegistro.controls['email'].invalid) {
      missingFields.push('Email');
    }
    if (this.formularioRegistro.controls['password'].invalid) {
      missingFields.push('Contraseña');
    }
    if (this.formularioRegistro.controls['confirmPassword'].invalid) {
      missingFields.push('Confirmar Contraseña');
    }
  
    if (missingFields.length > 0) {
      let alertMessage = '';
  
      if (missingFields.length === 1) {
        alertMessage = 'Falta rellenar el siguiente campo: ${missingFields[0]}';
      } else {
        alertMessage = 'Falta rellenar más de un campo para registrarse: ' + missingFields.join(', ');
      }
  
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Campos faltantes',
        message: alertMessage,
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
  
    if (f.password !== f.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Contraseñas no coinciden',
        message: 'Las contraseñas no son iguales. Por favor, intenta de nuevo.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
  
    var nickname = {
      nickname: f.nickname,
      password: f.password
    }
  
    localStorage.setItem('nickname', JSON.stringify(nickname));
    console.log('Registrado e Ingresando');
    this.navCtrl.navigateRoot('home');
  
    const successAlert = await this.alertController.create({
      header: 'Éxito',
      subHeader: 'Registro completado',
      message: 'Usuario registrado con éxito.',
      buttons: ['Aceptar']
    });
  
    await successAlert.present();
  }
}