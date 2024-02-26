import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  
  {
    path: '',
    component: DashboardComponent
  },
  {

    path: 'animals',

    pathMatch: 'full',

    component: AnimalsComponent

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
