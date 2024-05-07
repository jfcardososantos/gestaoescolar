import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ButtonModule } from 'primeng/button';


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
