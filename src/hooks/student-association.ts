/* eslint-disable indent */
// Use this hook to manipulate incoming or outgoing data.

// import { Params } from 'express-serve-static-core';
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import { any } from 'joi';

import { query } from '@feathersjs/express';
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
const sequelize=context.app.get('sequelizeClient');
const {books,borrows,authors,types}=sequelize.models;





context.params.sequelize={

// const search:any;


include:[


  {
    model:borrows,
    attributes:['takenDate','broughtDate'],
    as:'borrow',
    include:  {
      model:books,
      attributes:['bookName','pageCount','point',],
      include: [
        {
          model: authors,
          as: 'author',
          attributes: ['authorName', 'authorSurname'],
        },
        {
          model: types,
          as: 'type',
          attributes: ['typeName'],
        }
      ]

        }


  }
],



raw:false
};



    return context;
  };
};
