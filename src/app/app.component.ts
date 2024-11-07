import { Component } from '@angular/core';
import { Keyboard  } from '@capacitor/keyboard';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private menuController: MenuController) { }

  ngOnInit(): void {
    Keyboard.addListener('keyboardDidShow', info => {
      document.documentElement.style.setProperty('--margin-keyboard', `-10px`);
    });

    Keyboard.addListener('keyboardWillHide', () => {
      document.documentElement.style.setProperty('--margin-keyboard', `-50px`);
    });
  }
  async hideKeyBoard() {
    await Keyboard.hide();
  }

  mostrarItem: boolean = false;

  toggleItem() {
    this.mostrarItem = !this.mostrarItem;
  }

  closeMenu() {
    this.menuController.close();
  }

}
