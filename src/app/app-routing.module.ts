import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ToysListPageComponent } from './pages/toys-list-page/toys-list-page.component';
import { ToyDetailsComponent } from './pages/toy-details/toy-details.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { AdminComponent } from './pages/admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SingupComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'category/:path', component: ToysListPageComponent},
  {path: ':id', component: ToyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
