import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AuthSectionComponent } from './auth-section/auth-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthUserLoginComponent } from './auth-section/auth-user-login/auth-user-login.component';
import { AuthUserComponent } from './auth-section/auth-user/auth-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    AuthSectionComponent,
    AuthUserLoginComponent,
    AuthUserComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
