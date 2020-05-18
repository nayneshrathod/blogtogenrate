import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

// import {AppRoutingModule } from './app-routing.module';
import { rootRouterConfig} from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PolicyService  } from './policy.service'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {FirebaseService} from './firebase.service';
import {EditUserResolver} from './edit-user/edit-user.resolver';
import {MatNativeDateModule} from '@angular/material/core';
import { DashboardComponent } from './components/account/dashboard/dashboard.component';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/account/verify-email/verify-email.component';
import {AuthService} from './shared/services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderListComponent,
    AvatarDialogComponent,
    NewUserComponent,
    HomeComponent,
    EditUserComponent,

  ],
    entryComponents: [AvatarDialogComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: false}),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [PolicyService,  FirebaseService, EditUserResolver],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
