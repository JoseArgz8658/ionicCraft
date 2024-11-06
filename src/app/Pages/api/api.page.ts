import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  skinPlayer: string = '';
  skinData: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  getPlayerSkin() {
    this.api.getSkin(this.skinPlayer).subscribe(
      (data) => {
        this.skinData = data;  // Asigna los datos del skin a la variable
        console.log(data);  // Muestra los datos en la consola para verificar
      },
      (error) => {
        console.error('Error al obtener el skin:', error);
      }
    );
  }

}