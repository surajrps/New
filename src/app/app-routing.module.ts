import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';

const routes: Routes = [
  {path:'first', component:FirstComponent},
  {path:'second', component:SecondComponent},
  { path: '**', component: FirstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
