import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bioma-contenido',
  templateUrl: './bioma-contenido.page.html',
  styleUrls: ['./bioma-contenido.page.scss'],
})
export class BiomaContenidoPage implements OnInit {
  x: any;

  constructor(private route: ActivatedRoute) {
    this.x = this.route.snapshot.paramMap.get('x') ? JSON.parse(this.route.snapshot.paramMap.get('x')!) : null;
  }

  ngOnInit() {
  }

}
