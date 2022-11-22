import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecursosCompartidosModule } from './recursos-compartidos/recursos-compartidos.module';
import { MainModule } from './main/main.module';
import { VariablesComponent } from './sintaxis/variables/variables.component';

@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecursosCompartidosModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
