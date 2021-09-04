import { RestService } from './services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'firebase-angular.auth'
  public lista:any = []

  constructor(private RestService:RestService){}
  
  
  ngOnInit(): void {
    this.cargarData();
    
  }  
  public cargarData(){
    this.RestService.get(`https://my-json-server.typicode.com/jirann/FAKEJSON/items`)
    .subscribe(respuesta =>{
      this.lista=respuesta;
      
    })
  }  
}
