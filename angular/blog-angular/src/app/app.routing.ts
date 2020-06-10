import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule}from '@angular/router';
//import componentes
import { LoginComponent}from './component/login/login.component';
import { RegisterComponent}from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { UserEditComponent} from './component/user-edit/user-edit.component'

//definicion de rutas
const appRoutes:Routes =[
    {path:'',component:HomeComponent},
    {path:'inicio',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'registro',component:RegisterComponent},
    {path:'ajustes',component:UserEditComponent},
    {path:'**',component:ErrorComponent}
    

];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
