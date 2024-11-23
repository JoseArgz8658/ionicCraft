import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  biomas: any;
  imagenBioma!: Blob;
  previewImageUrl: string | null = null;

  showHelp1: boolean = false;
  showHelp2: boolean = false;
  showHelp3: boolean = false;
  showHelp4: boolean = false;
  showHelp5: boolean = false;

  constructor(private router: Router, private activedoruter: ActivatedRoute, private bd: BdService, private alertController: AlertController) {
    this.activedoruter.queryParams.subscribe(res => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.biomas = this.router.getCurrentNavigation()?.extras?.state?.['bioma'];
      }
    })
  }

  ngOnInit() {}

  async update() {
    if (this.validarFormulario()) {
      this.bd.actualizarBioma(this.biomas.bioma_id, this.biomas.minecraft_bioma_id, this.biomas.bioma_nombre, this.biomas.bioma_descripcion, this.biomas.bioma_imagen);
      await this.mostrarConfirmacion('Bioma modificado exitosamente.');
      this.router.navigate(['/read']);
    } else {
      await this.mostrarError('Por favor, revise los campos e intente nuevamente.');
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        this.mostrarError('El archivo seleccionado es demasiado grande. Máximo 5 MB.');
        return;
      }
      this.imagenBioma = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewImageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
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
    if (!idPattern.test(this.biomas.minecraft_bioma_id) || this.biomas.minecraft_bioma_id.length > 50) {
      this.mostrarError("El ID del bioma no es válido. Debe tener solo minúsculas, números y guiones bajos, y no superar los 50 caracteres.");
      return false;
    }
  
    const nombrePattern = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    if (!nombrePattern.test(this.biomas.bioma_nombre) || this.biomas.bioma_nombre.length > 50) {
      this.mostrarError("El nombre del bioma no es válido. No debe contener números ni caracteres especiales, no debe tener espacios al inicio o final, y no debe superar los 50 caracteres.");
      return false;
    }
  
    const descripcionPattern = /^[^\s]+(.*[^\s])?$/;
    if (!descripcionPattern.test(this.biomas.bioma_descripcion) || this.biomas.bioma_descripcion.length > 300) {
      this.mostrarError("La descripción del bioma no es válida. No debe tener espacios al inicio o final, y no debe superar los 300 caracteres.");
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
