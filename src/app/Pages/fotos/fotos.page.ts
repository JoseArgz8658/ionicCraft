import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/services/fotos.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {
  photos: string[] = [];

  constructor(private fotosService: FotosService) { 
    this.photos = this.fotosService.photos;
  }

  ngOnInit(): void {
  }

  async tomarFoto() {
    await this.fotosService.addNewPhoto();
  }

  refreshPage() {
    location.reload();
  }

}
