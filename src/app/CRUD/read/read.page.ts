import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
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

  update(x:any){
    let navigationsExtras: NavigationExtras = {
      state: {
        bioma: x
      }
    }
    this.router.navigate(['/update'], navigationsExtras);
  }

  eliminar(x:any){
    this.bd.eliminarBioma(x.bioma_id);
  }

  create(){
    this.router.navigate(['/create']);
  }

}