import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitacionComponent } from './component/invitacion/invitacion.component';

const routes: Routes = [
  { path: ':name', component: InvitacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
