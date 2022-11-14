import { disallow } from 'feathers-hooks-common';
import validate from 'feathers-validate-joi';

import * as authentication from '@feathersjs/authentication';
import { HooksObject } from '@feathersjs/feathers';

import borrowAssociation from '../../hooks/borrow-association';
import { borrowsSchema, joiOptions } from './borrows.joi';

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [borrowAssociation()],
    get: [borrowAssociation()],
    create: [validate.form(borrowsSchema,joiOptions)],
    update: [validate.form(borrowsSchema,joiOptions)],
    patch: [validate.form(borrowsSchema,joiOptions)],
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
