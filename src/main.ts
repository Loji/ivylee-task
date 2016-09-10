import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { ListAppComponent } from './app/list-app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ListAppComponent);
