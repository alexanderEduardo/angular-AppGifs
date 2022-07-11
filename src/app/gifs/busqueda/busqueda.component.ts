import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild("txtBuscar")
  txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifService:GifsService){}

  buscar(parm:HTMLInputElement){
    let value_ = parm.value;
    if(value_.trim().length===0){return}
    this.gifService.buscarGifs(value_);
    console.log(this.txtBuscar.nativeElement.value);
    //parm.value="";
    this.txtBuscar.nativeElement.value="";
  }
}
