import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule,routing ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
/*Added Component*/


