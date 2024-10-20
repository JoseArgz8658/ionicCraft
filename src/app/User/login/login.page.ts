import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios: any[] = [
    { nickname: 'admin', email: 'admin@admin.admin', password: 'admin' },
    { nickname: 'Jose', email: 'jo.aranguiza@duocuc.cl', password: 'Duoc2024!' }
  ];

  constructor(
    private fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioLogin = this.fb.group({
      'nickname': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {}

  async iniciarSesion() {
    const f = this.formularioLogin.value;

    const usuarioEncontrado = this.usuarios.find(usuario => 
      usuario.nickname === f.nickname && usuario.password === f.password
    );

    if (usuarioEncontrado) {
      localStorage.setItem('nickname', JSON.stringify(usuarioEncontrado.nickname));
      console.log('Usuario ingresado: ', usuarioEncontrado.nickname);
      this.navCtrl.navigateRoot('home');
      
      const successAlert = await this.alertController.create({
        header: 'Éxito',
        message: 'Iniciaste sesión correctamente.',
        buttons: ['Aceptar']
      });
      await successAlert.present();
    } else {
      const errorAlert = await this.alertController.create({
        header: 'Error',
        message: 'Credenciales incorrectas. Por favor, intenta de nuevo.',
        buttons: ['Aceptar']
      });
      await errorAlert.present();
    }
  }
}