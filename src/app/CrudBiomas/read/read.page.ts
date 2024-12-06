import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  arregloBiomas: any = [ { } ];

  constructor(private bd: BdService, private router: Router) { }

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      if (res) {
        this.bd.fetchBiomas().subscribe(data => {
          this.arregloBiomas = data;
        });
      }
    });
  }

  createImageUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }

  update(x: any) {
    let navigationsExtras: NavigationExtras = {
      state: {
        bioma: x
      }
    }
    this.router.navigate(['/update'], navigationsExtras);
  }

  eliminar(x: any) {
    this.bd.eliminarBioma(x.bioma_id);
  }

  create() {
    this.router.navigate(['/create']);
  }

  refreshPage() {
    location.reload();
  }

}