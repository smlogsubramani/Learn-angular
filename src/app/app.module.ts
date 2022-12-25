import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Added Routing components from the app-routing.module
import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
