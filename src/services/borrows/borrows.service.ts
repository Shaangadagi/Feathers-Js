// Initializes the `borrows` service on path `/borrows`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Borrows } from './borrows.class';
import createModel from '../../models/borrows.model';
import hooks from './borrows.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'borrows': Borrows & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/borrows', new Borrows(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('borrows');

  service.hooks(hooks);
}
