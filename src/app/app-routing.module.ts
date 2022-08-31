import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFanComponent } from './components/create-fan/create-fan.component';
import { DetailFanComponent } from './components/detail-fan/detail-fan.component';
import { ListFanComponent } from './components/list-fan/list-fan.component';
import { Page404Component } from './components/page404/page404.component';
import { UpdateFanComponent } from './components/update-fan/update-fan.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListFanComponent },
  { path: "detail/:id", component: DetailFanComponent },
  { path: "update/:id", component: UpdateFanComponent },
  { path: "create", component: CreateFanComponent },
  { path: "404", component: Page404Component },
  { path: "**", redirectTo: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
