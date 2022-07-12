import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
 
  @ViewChild("txtBuscar")
  txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifService:GifsService){}

  buscar(parm:HTMLInputElement) {
    let value_ = parm.value;
    if (value_.trim().length === 0) {return}
    this.gifService.setSideBarItems(value_);
    console.log(this.txtBuscar.nativeElement.value);
    //parm.value = "";
    this.txtBuscar.nativeElement.value = "";
    
  }

  showAuthor() {
    Swal.fire('El creador de este proyecto ha sido Alexander Peña 😃');
  }
}
