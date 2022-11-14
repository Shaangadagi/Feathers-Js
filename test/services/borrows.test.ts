import assert from 'assert';
import app from '../../src/app';

describe('\'borrows\' service', () => {
  it('registered the service', () => {
    const service = app.service('borrows');

    assert.ok(service, 'Registered the service');
  });
});
