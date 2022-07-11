import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = "6S1CiUqOZaI9VE21yGtM67fMhAmclfdv";
  private _historial:string[]=[];
  private resultados:any[]=[];

  constructor(private http: HttpClient){}

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query:string){
    if(query.trim().length===0){return}
    query = query.trim().toLocaleLowerCase(); //quiero almacenar valores minisculas en mi array
    if(this._historial.includes(query)){ return;}
    
    this._historial.unshift(query);
    this._historial=this._historial.splice(0,10);
    console.log(this._historial);
    this.http.get<any>(`https://api.giphy.com/v1/gifs/search?api_key=6S1CiUqOZaI9VE21yGtM67fMhAmclfdv&q=${query}&limit=10`)
    .subscribe( res => console.log(res.data))
  }
}
