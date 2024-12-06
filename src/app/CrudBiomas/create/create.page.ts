import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  minecraft_bioma_id: string = "";
  bioma_nombre: string = "";
  bioma_descripcion: string = "";
  bioma_imagen!: Blob;

  showHelp1: boolean = false;
  showHelp2: boolean = false;
  showHelp3: boolean = false;
  showHelp4: boolean = false;
  showHelp5: boolean = false;

  constructor(private bd: BdService, private alertController: AlertController, private router: Router, private localNotifications: LocalNotifications, private vibration: Vibration) { }

  ngOnInit() {}

  async agregar() {
    if (this.validarFormulario() && this.bioma_imagen) {
      this.bd.agregarBiomas(this.minecraft_bioma_id, this.bioma_nombre, this.bioma_descripcion, this.bioma_imagen);
  
      this.localNotifications.schedule({
        id: 1,
        title: 'Bioma Agregado',
        text: `¡El bioma "${this.bioma_nombre}" se ha creado exitosamente!`,
        foreground: true,
      });
  
      this.vibration.vibrate(1000);
  
      await this.mostrarConfirmacion('Bioma creado exitosamente.');
      this.router.navigate(['/read']);
    } else {
      await this.mostrarError('Por favor, revise los campos e intente nuevamente. Asegúrese de seleccionar una imagen.');
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        this.mostrarError("El archivo seleccionado es demasiado grande. Máximo 5 MB.");
        return;
      }
      this.bioma_imagen = file;
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
    const idPattern = /^[a-z0-9_]+$/;
    if (!idPattern.test(this.minecraft_bioma_id) || this.minecraft_bioma_id.length > 50) {
      this.mostrarError("El ID del bioma no es válido. Debe tener solo minúsculas, números y guiones bajos, y no superar los 50 caracteres.");
      return false;
    }

    const nombrePattern = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    if (!nombrePattern.test(this.bioma_nombre) || this.bioma_nombre.length > 50) {
      this.mostrarError("El nombre del bioma no es válido.");
      return false;
    }

    const descripcionPattern = /^[^\s]+(.*[^\s])?$/;
    if (!descripcionPattern.test(this.bioma_descripcion) || this.bioma_descripcion.length > 300) {
      this.mostrarError("La descripción del bioma no es válida.");
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
}