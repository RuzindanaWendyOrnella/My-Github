import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DisplayerComponent } from './displayer/displayer.component';


const routes: Routes = [
  // { path: 'pages', component:PagesComponent},
  // { path: 'pages/:id', component:PagesComponent},
  // { path:'displayer',component:DisplayerComponent},
  // { path: '', redirectTo:"/pages", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
