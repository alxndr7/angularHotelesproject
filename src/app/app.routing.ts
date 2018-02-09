/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
    {
        path: 'auth',
        component: MainLayoutComponent,
        children: [
            {
                path: 'auth', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: 'app/+home/home.module#HomeModule'
            },
        ]
    },
    {
        path: '', pathMatch: 'full', redirectTo: '/login'
    },
    {
        path: 'login', loadChildren: 'app/+auth/login/login.module#LoginModule',
        pathMatch: 'full'
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
