import './polyfills.ts';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { ListAppComponent } from './app/list-app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routing';

if (environment.production) {
  enableProdMode();
}

bootstrap(ListAppComponent, [APP_ROUTER_PROVIDERS]).catch(err => console.error(err));
