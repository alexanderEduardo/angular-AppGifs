import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

  get resultados() : any[]{
    return this.gifService!.resultados;
  }
  
  public clicked : boolean = false;
  constructor(private gifService:GifsService) { }

  zoomImg(img : any) {
    if (this.clicked) 
      img.style.transform = 'scale(1.5)';
    else 
      img.style.transform = 'scale(1)'; 
  }


}
