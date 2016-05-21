import { ROUTER_PROVIDERS } from '@angular/router';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

bootstrap(AppComponent)
.then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.error(error)
);
