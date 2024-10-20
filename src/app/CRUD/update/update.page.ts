import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  biomas: any;

  constructor(private router: Router, private activedoruter: ActivatedRoute, private bd: BdService) {
    this.activedoruter.queryParams.subscribe(res=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.biomas = this.router.getCurrentNavigation()?.extras?.state?.['bioma'];
      }
    })
  }

  ngOnInit() {
  }

  update(){
    this.bd.actualizarBioma(this.biomas.bioma_id, this.biomas.minecraft_bioma_id, this.biomas.nombre, this.biomas.descripcion);
  }

}
