import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {ManagePhrasesComponent} from './manage-phrases/manage-phrases.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {CanActivatedGuard} from '../shared/can-activated.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [CanActivatedGuard],
    children: [
      {path: 'phrases', component: ManagePhrasesComponent},
      {path: 'users', component: ManageUsersComponent},
      {path: '', redirectTo: 'phrases', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
