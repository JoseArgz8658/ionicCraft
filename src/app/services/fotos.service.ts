import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  photos: string[] = [];

  constructor() { }

  async addNewPhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90,
      allowEditing: false
    });
    if (photo.webPath) {
      this.photos.unshift(photo.webPath);
    }
  };
}
