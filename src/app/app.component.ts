import { Component } from '@angular/core';
import { Keyboard  } from '@capacitor/keyboard';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() { }

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

}
