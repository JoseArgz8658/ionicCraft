import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  player: string = '';
  playerId: string = '';
  skinUrl: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  buscarSkin() {
    if (this.player) {
      // Obtener el ID del jugador
      this.api.getId(this.player).subscribe(
        (response) => {
          this.playerId = response.id;  // Almacenar la ID
          // Usar el ID para obtener el skin
          this.api.getSkin(this.playerId).subscribe(
            (skinResponse) => {
              this.skinUrl = skinResponse.body;  // Almacenar la URL del skin
            },
            (error) => {
              console.error('Error al obtener el skin:', error);
            }
          );
        },
        (error) => {
          console.error('Error al obtener el ID del jugador:', error);
        }
      );
    } else {
      console.log('Por favor, ingresa un nombre de jugador.');
    }
  }

}
