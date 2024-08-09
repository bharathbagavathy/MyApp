import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}   from '@angular/common/http'
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
//import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    //TestComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
