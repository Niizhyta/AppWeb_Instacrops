import { Component, OnInit, Input } from '@angular/core';
import { SeleccionServiceService } from './../services/seleccion-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  public image:string | undefined;
  
  
  constructor(private SeleccionService: SeleccionServiceService) { }

  ngOnInit(): void {
    this.image = 'http://picsum.photos/536/354'
   
   // console.log('llamando componente');
  }

  agregarSeleccionado(){
  // console.log(this.dataEntrante);
    this.SeleccionService.disparadorSeleccion.emit({
      data:this.dataEntrante
    })

  }
}
