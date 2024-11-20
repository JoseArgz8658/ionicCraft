import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mostrarItem: boolean = false;
  
  constructor(private menuController: MenuController, private bd: BdService) { }

  ngOnInit() {
    this.verificarRolUsuario();
  }

  async verificarRolUsuario() {
    try {
      const usuarioActivo = await this.bd.obtenerUsuarioActivo();
      this.mostrarItem = usuarioActivo?.tipo === 'admin';
    } catch (error) {
      console.error('Error al obtener el usuario activo:', error);
      this.mostrarItem = false;
    }
  }

  toggleItem() {
    this.mostrarItem = !this.mostrarItem;
  }

  closeMenu() {
    this.menuController.close();
  }

}
