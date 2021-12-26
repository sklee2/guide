import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { AngularRoutingComponent } from './angular-routing/angular-routing.component';

const routes: Routes = [
  {path: '', component: AngularRoutingComponent},
  {path: 'angularrouting', component: AngularRoutingComponent},
  {path: 'angularform', component: AngularFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
