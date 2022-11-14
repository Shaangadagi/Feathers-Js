import { disallow } from 'feathers-hooks-common';
// Don't remove this comment. It's needed to format import lines nicely.
import validate from 'feathers-validate-joi';

import * as authentication from '@feathersjs/authentication';

// import { HooksObject } from '@feathersjs/feathers';
import { authorSchema, joiOptions } from './author.joi';

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [validate.form(authorSchema,joiOptions)],
    update: [validate.form(authorSchema,joiOptions)],
    patch: [validate.form(authorSchema,joiOptions)],
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
