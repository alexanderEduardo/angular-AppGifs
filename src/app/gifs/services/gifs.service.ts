import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = "6S1CiUqOZaI9VE21yGtM67fMhAmclfdv";
  private gifEndPoint:string = "https://api.giphy.com/v1/gifs";
  private _historial:string[]=[];
  public resultados:Gif[]=[];

  // Este constructor se inicializa cada vez que hacemos f5 a la pag web pero solo una vez ya que es un
  //service "bean"  
  constructor(private http: HttpClient) {
    console.log("Service INIT");
    if(localStorage.getItem("historial") || localStorage.getItem("lastResults")){ // if exist
      this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
      this.resultados = JSON.parse(localStorage.getItem("lastResults")!) || [];
    }
  }

  get historial() {
    return [...this._historial];
  }

  setSideBarItems(query:string) {
    if(query.trim().length===0) { return }
    query = query.trim().toLocaleLowerCase(); //quiero almacenar valores minisculas en mi array
    if(this._historial.includes(query)) { return }
    
    this._historial.unshift(query);
    this._historial=this._historial.splice(0,10);
    //Almacenamos el arreglo en el local storage para persistir los datos 
    this.setItemInLocalStorage();
    this.searchGifs(query);
  }

  searchGifs(value : string) {
    
    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('q',value)
    .set('limit','10');

    this.http.get<SearchGifsResponse>(`${this.gifEndPoint}/search`,{params})
    .subscribe( res => {
      this.resultados=res.data;
      localStorage.setItem("lastResults",JSON.stringify(this.resultados));
      localStorage.setItem("lastResult",params.get('q') || "");
      console.log(res);
    });
  }

  deleteItemInSideBar(value : string) : void {
    this._historial=this._historial.filter(data => data !== value);
    
    if(localStorage.getItem('lastResult') === value) {
      this.resultados=[];
      localStorage.setItem("lastResults",JSON.stringify([]));
    }

    this.setItemInLocalStorage(); 
  }

  private setItemInLocalStorage(historial?:any) : void {
    localStorage.setItem("historial",JSON.stringify(this._historial));
  }


}
