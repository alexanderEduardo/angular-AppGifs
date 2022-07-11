import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private gifService:GifsService) { }

  ngOnInit(): void {
  }

  get historial() : string[]{
    return this.gifService.historial;
  }

  buscar(item:string){
    console.log(item);
    this.gifService.searchGifs(item);
  }

}
