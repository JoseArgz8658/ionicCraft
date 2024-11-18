import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private bd: BdService, private router: Router) { }

  ngOnInit() {}

  cerrarSesion() {
    this.router.navigate(['/home']);
  }

}