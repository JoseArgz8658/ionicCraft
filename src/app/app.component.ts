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

  ngOnInit() { }

  toggleItem() {
    this.mostrarItem = !this.mostrarItem;
  }

  closeMenu() {
    this.menuController.close();
  }

}
