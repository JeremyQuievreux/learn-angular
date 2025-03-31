import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page.component';
import { InterceptorPageComponent } from './components/interceptor-page/interceptor-page.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'interceptor', component: InterceptorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
