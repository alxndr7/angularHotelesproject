import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { AppCustomUsernameDirective } from './directives/app-custom-username/app-custom-username.directive';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [ LoginComponent, AppCustomUsernameDirective ]
} )
export class LoginModule {}
