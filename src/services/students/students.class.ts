/* eslint-disable indent */
import sequelize, {
	SequelizeServiceOptions,
	Service,
} from 'feathers-sequelize';

/* eslint-disable indent */
// import { HookContext } from '../../app';
import { Application } from '../../declarations';

// import studentAssociation from '../../hooks/student-association';

export class Students extends Service {
  app: Application;
  docs: any;
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
    this.app = app;
  }




}
