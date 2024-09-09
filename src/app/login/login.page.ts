import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioLogin.value;
    var usuarioStr = localStorage.getItem('usuario');
  
    if (usuarioStr) {
      var usuario = JSON.parse(usuarioStr);
  
      if (usuario.email == f.email && usuario.password == f.password) {
        console.log('Ingresando');
        this.navCtrl.navigateRoot('home');
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'Datos Incorrectos.',
          message: 'Algun dato ingresado es incorrecto.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Usuario no encontrado.',
        message: 'No se ha encontrado ningún usuario registrado.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
  

}