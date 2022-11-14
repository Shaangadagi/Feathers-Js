/* eslint-disable indent */
// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { DataTypes, Model, Sequelize } from 'sequelize';
import { HookReturn } from 'sequelize/types/hooks';

import { Application } from '../declarations';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const students = sequelizeClient.define('students', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    surName: {
      type: DataTypes.STRING,
      allowNull: false

    },
    birthDate: {
      type: DataTypes.DATE,

    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false

    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },


  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (students as any).associate = function (models: any): void {
    // Define associations here
    const {borrows}=models;
    students.hasMany(borrows,{as:'borrow',foreignKey:'studentId'});

  //  students.hasMany(borrows,{as:'borrow',foreignKey:'studentId'});
  //  students.hasMany(books,{as:'book'});
  // students.belongsToMany(books,{through:'borrows',foreignKey:'studentId'});

    // See https://sequelize.org/master/manual/assocs.html
  };

  return students;
}
