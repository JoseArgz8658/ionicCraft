import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-contra',
  templateUrl: './cambiar-contra.page.html',
  styleUrls: ['./cambiar-contra.page.scss'],
})
export class CambiarContraPage implements OnInit {
  usuario: string = '';

  constructor(private bd: BdService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async recuperarContra() {
    const usuarioExistente = await this.bd.verificarUsuarioPorApodoOCorreo(this.usuario);
    
    if (usuarioExistente) {
      this.mostrarFormularioCambioContra();
    } else {
      this.mostrarAlerta('Error', 'Usuario no encontrado');
    }
  }

  async mostrarFormularioCambioContra() {
    const alert = await this.alertController.create({
      header: 'Cambio de Contraseña',
      message: 'Ingrese una nueva contraseña',
      inputs: [
        {
          name: 'nuevaContraseña',
          type: 'password',
          placeholder: 'Nueva Contraseña'
        },
        {
          name: 'confirmarContraseña',
          type: 'password',
          placeholder: 'Confirmar Contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Cambiar',
          handler: async (data) => {
            const nuevaContraseña = data.nuevaContraseña;
            const confirmarContraseña = data.confirmarContraseña;
        
            if (nuevaContraseña !== confirmarContraseña) {
              this.mostrarAlerta('Error', 'Las contraseñas no coinciden');
              return Promise.resolve(false);
            }
        
            if (nuevaContraseña) {
              await this.bd.cambiarContra(this.usuario, nuevaContraseña);
              this.mostrarAlerta('Éxito', 'Contraseña cambiada con éxito');
              this.router.navigate(['/login']);
              return Promise.resolve(true); 
            }
        
            return Promise.resolve(false);
          }
        }
      ]
    });

    await alert.present();
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