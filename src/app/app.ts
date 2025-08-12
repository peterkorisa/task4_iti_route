import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Productes } from './productes/productes';
import { RouterModule } from '@angular/router';
import { AboutUs } from './about-us/about-us';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';


@Component({
  selector: 'app-root',
  imports: [Navbar,Productes ,RouterOutlet  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task4_iti_routes');
  
}
