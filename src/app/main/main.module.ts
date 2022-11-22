import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { RecursosCompartidosModule } from '../recursos-compartidos/recursos-compartidos.module';
import { SintaxisComponent } from './sintaxis/sintaxis.component';
import { RouterModule } from '@angular/router';
import { ArraysComponent } from './arrays/arrays.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SintaxisComponent,
    ArraysComponent
  ],
  imports: [
    CommonModule,
    RecursosCompartidosModule,
    RouterModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainModule { }
