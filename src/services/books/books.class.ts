import { SequelizeServiceOptions, Service } from 'feathers-sequelize';

/* eslint-disable indent */
import { Params } from '@feathersjs/feathers';

import { Application } from '../../declarations';

export class Books extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }


  // async find(params?: Params): Promise<any> {
  //   const limit = params?.query?.limit ? params.query.limit : 10;
  //   const skip = params?.query?.skip ? params.query.skip : 0;
  //   const condition: any = {};

  //   if(params?.query?.search){
  //     condition.bookName = { $iLike : `%${params?.query?.search}%` };
  //   }
  //   const result = await super.find({
  //       query: {
  //           $skip: skip,
  //           $limit: limit,
  //           ...condition,

  //       },
  //       // include:[{

  //       // }]
  //   });
  //   return result;
  // }


}
