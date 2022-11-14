import { SequelizeServiceOptions, Service } from 'feathers-sequelize';

/* eslint-disable indent */
import { Params } from '@feathersjs/feathers';

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

  // async find(params?: Params): Promise<any> {
  //   const limit = params?.query?.limit ? params.query.limit : 10;
  //   const skip = params?.query?.skip ? params.query.skip : 0;
  //   const condition: any = {};

  //   if(params?.query?.search){
  //     condition.name = { $iLike : `%${params?.query?.search}%` };
  //   }
  //   const result = await super.find({
  //       query: {
  //           $skip: skip,
  //           $limit: limit,
  //           ...condition,

  //       },
  //   });
  //   return result;
  // }

}
