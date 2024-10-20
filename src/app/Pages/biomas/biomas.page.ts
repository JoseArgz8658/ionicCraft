import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-biomas',
  templateUrl: './biomas.page.html',
  styleUrls: ['./biomas.page.scss'],
})
export class BiomasPage implements OnInit {
  arregloBiomas: any = [
    {
      bioma_id: '',
      minecraft_bioma_id: '',
      bioma_nombre: '',
      bioma_descripcion: ''
    }
  ]

  constructor(private bd: BdService, private router: Router) { }

  ngOnInit() {
    //pregunto si la base de datos esta lista
    this.bd.dbState().subscribe(res=>{
      //verifico si esta lista
      if(res){
        //consumir el observable de la lista
        this.bd.fetchBiomas().subscribe(data=>{
          this.arregloBiomas = data;
        })
      }
    })
  }

  goBiomaContenido(x: any) {
    this.router.navigate(['/bioma-contenido', { x: JSON.stringify(x) }]);
  }
  
}
