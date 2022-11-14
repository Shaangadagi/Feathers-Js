// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { DataTypes, Model, Sequelize } from 'sequelize';
import { HookReturn } from 'sequelize/types/hooks';

import { Application } from '../declarations';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const authors = sequelizeClient.define('authors', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    authorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authorSurname: {
      type: DataTypes.STRING,

    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (authors as any).associate = function (models: any): void {
    // Define associations here
    const {books}=models;
    authors.hasMany(books,{as:'book', foreignKey:'authorId' });
    // See https://sequelize.org/master/manual/assocs.html
  };

  return authors;
}
