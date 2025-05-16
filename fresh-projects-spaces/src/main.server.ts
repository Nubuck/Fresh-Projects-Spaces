import 'zone.js/node';
import '@angular/platform-server/init';
import { render } from '@analogjs/router/server';

import { AppRootComponent } from './app/components/app-root/app-root.component';
import { config } from './app/app.config.server';

export default render(AppRootComponent, config);
