import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './app.routing';
import { ListAppComponent } from './list-app/list-app.component';
import { AppComponent } from './app.component';
import { DeletedItemsComponent } from './deleted-items/deleted-items.component';
 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    ListAppComponent,
    AppComponent,
    DeletedItemsComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
