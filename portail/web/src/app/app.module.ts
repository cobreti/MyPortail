import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './modules/header/header.module';
import { appRoutes } from './app-routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
