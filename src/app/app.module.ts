import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IconComponent } from './icon.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule  ],
  declarations: [ AppComponent, IconComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
