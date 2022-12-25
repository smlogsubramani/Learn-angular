import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Manual imports
import {HomeComponent} from './home/home.component';
import {LinksComponent} from './links/links.component';
import { FormsComponent } from './forms/forms.component';

//route paths
const routes: Routes = [
 { path:'',component:HomeComponent},
 { path:'Links',component:LinksComponent},
 { path:'forms',component:FormsComponent}
];


//default imports and exports for the appmodule.ts
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//To avoid multiple imports in the app-module.ts
export const RoutingComponents =[HomeComponent,LinksComponent,FormsComponent]
