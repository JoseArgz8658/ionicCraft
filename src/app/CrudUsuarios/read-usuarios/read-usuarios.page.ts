import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
  arregloUsuarios: any = [
    {
      usuario_id: '',
      usuario_tipo: '',
      usuario_apodo: '',
      usuario_gmail: '',
      usuario_password: ''
    }
  ]

  constructor(private bd: BdService, private router: Router) { }

  ngOnInit() {
    //pregunto si la base de datos esta lista
    this.bd.dbState().subscribe(res=>{
      //verifico si esta lista
      if(res){
        //consumir el observable de la lista
        this.bd.fetchUsuarios().subscribe(data=>{
          this.arregloUsuarios = data;
        })
      }
    })
  }

  update(x:any){
    let navigationsExtras: NavigationExtras = {
      state: {
        usuario: x
      }
    }
    this.router.navigate(['/updateUsuarios'], navigationsExtras);
  }

  eliminar(x:any){
    this.bd.eliminarUsuario(x.usuario_id);
  }

  create(){
    this.router.navigate(['/createUsuarios']);
  }

  refreshPage() {
    location.reload();
  }

}