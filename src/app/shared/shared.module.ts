import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';


/**
 * Exporto el SidebarComponent para que puede utilizar ese componente en el modulo que lo importa en este
 * caso AppModule ya que sabemos que en el AppComponent es una declaracion de AppModule entonces quiere
 * decir que en el template de AppComponent vamos a usar <app-sidebar></app-sidebar>
 */
@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
