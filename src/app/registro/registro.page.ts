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
      'name': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar() {
    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Revisa los datos.',
        message: 'Por favor, rellena todos los campos.',
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

    var usuario = {
      name: f.name,
      password: f.password
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
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