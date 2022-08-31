import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFanComponent } from './components/list-fan/list-fan.component';
import { DetailFanComponent } from './components/detail-fan/detail-fan.component';
import { CreateFanComponent } from './components/create-fan/create-fan.component';
import { UpdateFanComponent } from './components/update-fan/update-fan.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListFanComponent,
    DetailFanComponent,
    CreateFanComponent,
    UpdateFanComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
