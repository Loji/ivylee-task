import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListAppComponent } from './list-app/list-app.component';

export const routes: Routes = [
    { path: '', component: ListAppComponent },
    { path: ':year/:month/:day', component: ListAppComponent },
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
