import { Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Productes } from './productes/productes';

export const routes: Routes = [
   
    { path: 'about', component: AboutUs },
    { path: 'contact', component: ContactUs },
    { path: '', component: Productes },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


