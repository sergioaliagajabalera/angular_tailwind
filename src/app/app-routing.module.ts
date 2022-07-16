import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import { PruebasComponent } from './pruebas/pruebas.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'pruebas', component: PruebasComponent },
  { path: "", redirectTo: '/main',pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
