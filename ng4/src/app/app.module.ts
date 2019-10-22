// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {UsersComponent} from './users.component';
import {UserDetailComponent} from './user-detail.component';
import {DashboardComponent} from './dashboard.component';
import {UserAddComponent} from './user-add.component';
import {UserUpdateComponent} from './user-update.component';

// Services
import {UserService} from './user.service';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent,
    UserAddComponent,
    UserUpdateComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
