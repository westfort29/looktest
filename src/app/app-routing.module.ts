import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/start?category=all'
  },
  {
    path: 'start',
    component: StartPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
