import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/main-page/main-page.component';
import { SintaxisComponent } from './main/sintaxis/sintaxis.component';
import { ArraysComponent } from './main/arrays/arrays.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'sintaxis', component: SintaxisComponent},
  {path: 'sintaxis/variables', component: SintaxisComponent},
  {path: 'arrays', component: ArraysComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
