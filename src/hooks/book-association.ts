/* eslint-disable indent */
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// import { Model, Sequelize } from 'sequelize';
// import model from 'sequelize/types/model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
const sequelize=context.app.get('sequelizeClient');
const {types,authors}=sequelize.models;
context.params.sequelize={
  as:'books',
include:[
  {
    model:authors,
    attributes:['authorName','authorSurname'],
    as:'author'
  },
  {
    model:types,
    attributes:['typeName'],
    as:'type'
  }
],
raw:false
};

    return context;
  };
};
