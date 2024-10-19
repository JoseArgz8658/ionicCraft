import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bioma-contenido',
  templateUrl: './bioma-contenido.page.html',
  styleUrls: ['./bioma-contenido.page.scss'],
})
export class BiomaContenidoPage implements OnInit {
  bioma: any;

  constructor(private route: ActivatedRoute) {
    this.bioma = this.route.snapshot.paramMap.get('bioma') ? JSON.parse(this.route.snapshot.paramMap.get('bioma')!) : null;
  }

  ngOnInit() {
  }

}
