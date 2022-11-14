import { disallow } from 'feathers-hooks-common';
// Don't remove this comment. It's needed to format import lines nicely.
import validate from 'feathers-validate-joi';

import * as authentication from '@feathersjs/authentication';
import { HooksObject } from '@feathersjs/feathers';

import { joiOptions, typeSchema } from './types.joi';

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [validate.form(typeSchema,joiOptions)],
    update: [validate.form(typeSchema,joiOptions)],
    patch: [validate.form(typeSchema,joiOptions)],
    remove: [disallow('external')]
  },

  after: {
    all: [],
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
