/* eslint-disable indent */
// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { DataTypes, Model, Sequelize } from 'sequelize';
import { HookReturn } from 'sequelize/types/hooks';

import { Application } from '../declarations';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const borrows = sequelizeClient.define('borrows', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
   takenDate: {
      type: DataTypes.DATE

    },
    broughtDate: {
      type: DataTypes.DATE,

    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,

    },
    bookId: {
      type: DataTypes.UUID,
      allowNull: false,

    },

  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (borrows as any).associate = function (models: any): void {
    // Define associations here
    const {students,books}=models;
    // borrows.belongsTo(students,{as:'student'});
    borrows.belongsTo(students);
    borrows.belongsTo(books);
    // See https://sequelize.org/master/manual/assocs.html
  };

  return borrows;
}
