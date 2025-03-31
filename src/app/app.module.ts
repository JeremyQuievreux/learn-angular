import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './components/home-page/home-page.component';
import { Navbar } from './components/navbar/navbar.component';
import { UserList } from './components/user-list/user-list.component';
import { UserDetail } from './components/user-detail/user-detail.component';
import { UserForm } from './components/user-form/user-form.component';

import { UserRoutingModule } from './user-routing.module';
import { TableRowComponent } from './components/table-row/table-row.component';
import { CheckIconPipe } from "./pipes/CheckIconPipe";
import { InterceptorPageComponent } from './components/interceptor-page/interceptor-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    Navbar,
    UserList,
    UserDetail,
    UserForm,
    TableRowComponent,
    CheckIconPipe,
    InterceptorPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
