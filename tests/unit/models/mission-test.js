import { moduleFor, test } from 'ember-qunit';

moduleFor('mission', 'Unit | Model | mission', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function (assert) {
  const model = this.subject();
  assert.ok(!!model);
});
