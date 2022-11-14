/* eslint-disable indent */
// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { DataTypes, Model, Sequelize } from 'sequelize';
import { HookReturn } from 'sequelize/types/hooks';

import { Application } from '../declarations';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const books = sequelizeClient.define('books', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    bookName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pageCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    authorId: {
      type: DataTypes.UUID,

    },
    typeId: {
      type: DataTypes.UUID,

    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (books as any).associate = function (models: any): void {
    // Define associations here
    const {types,authors,borrows}=models;
    books.belongsTo(types,{as:'type'});
    books.belongsTo(authors,{as:'author'});
// books.belongsToMany(students,{through:'borrows',foreignKey:'bookId'});

books.hasMany(borrows,{foreignKey:'bookId'});

    // See https://sequelize.org/master/manual/assocs.html
  };

  return books;
}
