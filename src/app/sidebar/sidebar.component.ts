import { Component, OnInit } from '@angular/core';
import { SeleccionServiceService } from '../services/seleccion-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private SeleccionService: SeleccionServiceService) {}
  public listaItems: Array<any> = [];

  ngOnInit(): void {
    this.SeleccionService.disparadorSeleccion.subscribe((data) => {
      console.log('recibiendo data...', data);
      this.listaItems.push(data);
    });
  }
}
