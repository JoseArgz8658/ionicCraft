import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  constructor(private bd: BdService, private router: Router) { }

  ngOnInit() { }

}
