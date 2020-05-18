import {NgModule} from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
//
//
// const routes: Routes = [];
//
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewUserComponent} from './new-user/new-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {EditUserResolver} from './edit-user/edit-user.resolver';

export const rootRouterConfig: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'details/:id', component: EditUserComponent, resolve: {data: EditUserResolver}},
];
/*
//
// const routes: Routes = [
//   { path: 'sign-in', component: SignInComponent},
//   { path: 'register-user', component: SignUpComponent},
//   { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
//   { path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: 'verify-email-address', component: VerifyEmailComponent }
// ];
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
//
// export class AppRoutingModule { }
*/
