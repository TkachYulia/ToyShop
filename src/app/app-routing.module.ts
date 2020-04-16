import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ToysListPageComponent } from './pages/toys-list-page/toys-list-page.component';
import { ToyDetailsComponent } from './pages/toy-details/toy-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'category/:path', component: ToysListPageComponent},
  {path: ':id', component: ToyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
