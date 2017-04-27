import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// Dodato u V09
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
