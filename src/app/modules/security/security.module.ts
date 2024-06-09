import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TwoFaIdentificationComponent } from './two-fa-identification/two-fa-identification.component';
import { UserComponent } from './user/user.component';
import { UserIdentificationComponent } from './user-identification/user-identification.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    TwoFaIdentificationComponent,
    UserComponent,
    UserIdentificationComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
