import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any = null;
  editMode: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  confirmPassword: string = '';

  constructor(private bd: BdService, private nativeStorage: NativeStorage, private router: Router) { }

  async ngOnInit() {
    this.usuario = await this.bd.obtenerUsuarioActivo();
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async cerrarSesion() {
    await this.bd.cerrarSesion();
    this.usuario = null;
    this.router.navigate(['/perfil']);
  }

  refreshPage() {
    location.reload();
  }

  async actualizarPerfil() {
    if (this.usuario && this.usuario.password === this.confirmPassword) {
      const { apodo, gmail, password } = this.usuario;

      await this.bd.actualizarUsuario(
        this.usuario.id,
        this.usuario.tipo,
        apodo,
        gmail,
        password
      );

      this.router.navigate(['/perfil']);
    } else {
      alert('Las contraseñas no coinciden.');
    }
  }
}