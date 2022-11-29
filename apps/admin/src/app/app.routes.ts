import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () =>
      import('admin/Module').then((m) => m.RemoteEntryModule),
  },
];
