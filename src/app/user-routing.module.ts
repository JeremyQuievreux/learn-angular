import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list.component';
import { UserDetail } from './components/user-detail/user-detail.component';
import { UserForm } from './components/user-form/user-form.component';
const routes: Routes = [
  { path: 'pilots', component: UserList },
  { path: 'pilot/detail/:id', component: UserDetail },
  { path: 'pilot/edit/:id', component: UserForm },
  { path: 'pilot/create', component: UserForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
