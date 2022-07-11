import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild("txtBuscar")
  txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(parm:HTMLInputElement){
    console.log(this.txtBuscar.nativeElement.value);
    console.log(parm.value);
    //parm.value="";
    this.txtBuscar.nativeElement.value="";
  }
}
