import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  nickName: string = '';
  armorSkinBody: string | null = null;

  showHelp: boolean = false;
  isNickNameValid: boolean = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  validarNickName() {
    const regex = /^(?=.*[A-Za-z])[^\s]+$/;
    this.isNickNameValid = regex.test(this.nickName);
  }

  getArmorSkin() {
    this.validarNickName();
    if (!this.isNickNameValid) {
      console.error('El nombre de usuario no es válido');
      return;
    }

    this.armorSkinBody = `${this.api.craftHeadArmorBody}/armor/body/${this.nickName}`;
  }

  downloadImage() {
    if (!this.armorSkinBody) return;
  
    fetch(this.armorSkinBody)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.nickName}_skin.png`;
        link.click();
        URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error descargando la imagen:', error));
  }

  toggleHelp() {
    this.showHelp = !this.showHelp;
  }

}