// import { disallow } from 'joi';
import { disallow } from 'feathers-hooks-common';
import validate from 'feathers-validate-joi';

import * as authentication from '@feathersjs/authentication';

// import { HooksObject } from '@feathersjs/feathers';
import bookAssociation from '../../hooks/book-association';
import { joiOptions } from '../authors/author.joi';
import { bookSchema } from './book.joi';

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [bookAssociation()],
    get: [bookAssociation()],
    create: [validate.form(bookSchema,joiOptions)],
    update: [validate.form(bookSchema,joiOptions)],
    patch: [validate.form(bookSchema,joiOptions)],
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
