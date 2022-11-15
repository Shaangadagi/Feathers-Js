/* eslint-disable indent */
// Use this hook to manipulate incoming or outgoing data.



import { Op } from 'sequelize';

// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const sequelize = context.app.get('sequelizeClient');
    const { students, books, authors, types } = sequelize.models;
    context.params.sequelize = {
      attributes: ['id', 'takenDate', 'broughtDate'],
      include: [{
        model: students,
        attributes: ['name', 'surName', 'birthDate', 'gender', 'class', 'point'],

      }, {
        model: books,
        attributes: ['bookName', 'pageCount', 'point'],
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

      },


      ],

      //search functionality
      studentId:{
        [Op.iLike]: `%${context.params?.query?.search}%`,
      },
      raw: false
    };
    return context;
  };
};
