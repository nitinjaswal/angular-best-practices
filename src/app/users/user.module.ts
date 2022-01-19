import { NgModule } from "@angular/core";
import {  RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        { path: 'register', component: RegisterComponent, },
        { path: 'sign-in', component: SignInComponent, },
    ]),
    SharedModule
  ],
  declarations: [RegisterComponent,SignInComponent ],
  providers: []
})
export class UsersModule {}
