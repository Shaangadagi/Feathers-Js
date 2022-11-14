import { disallow } from 'feathers-hooks-common';
import validate from 'feathers-validate-joi';

import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';

import studentAssociation from '../../hooks/student-association';
import { joiOptions, studentSchema } from './students.joi';

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
  before: {
    all: [],
    find: [authenticate('jwt'), studentAssociation()],
    get: [authenticate('jwt'), studentAssociation()],
    create: [ hashPassword('password'),validate.form(studentSchema,joiOptions) ],
    update: [ hashPassword('password'),  authenticate('jwt'),validate.form(studentSchema,joiOptions) ],
    patch: [ hashPassword('password'),  authenticate('jwt'),validate.form(studentSchema,joiOptions) ],
    remove: [ authenticate('jwt'),disallow('external') ]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
