import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";

import {HttpClient,HttpHeaders} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

//importar rutas
import {routing,appRoutingProviders}from './app.routing';
//componentes que se generan 
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { from } from 'rxjs';
import { UserEditComponent } from './component/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,//ruuting
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFileUploaderModule
  ],
  providers: [
    appRoutingProviders//routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
