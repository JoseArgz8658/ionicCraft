import { Component, OnInit, ViewChild } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';
import { Keyboard } from '@capacitor/keyboard';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.page.html',
  styleUrls: ['./create-usuarios.page.scss'],
})
export class CreateUsuariosPage implements OnInit {
  @ViewChild('content', { static: false }) content: IonContent;

  usuario_tipo: string = "";
  usuario_apodo: string = "";
  usuario_gmail: string = "";
  usuario_password: string = "";

  constructor(private bd: BdService) { }

  ngOnInit() {
    this.initializeKeyboardListeners();
  }

  initializeKeyboardListeners() {
    Keyboard.addListener('keyboardWillShow', () => {
      this.content.scrollToBottom(300);
    });

    Keyboard.addListener('keyboardWillHide', () => {
      this.content.scrollToTop(300);
    });
  }

  agregar() {
    this.bd.agregarUsuarios(this.usuario_tipo, this.usuario_apodo, this.usuario_gmail, this.usuario_password);
    Keyboard.hide();
  }

}
