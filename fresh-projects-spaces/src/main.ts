import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppRootComponent } from './app/components/app-root/app-root.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppRootComponent, appConfig);
