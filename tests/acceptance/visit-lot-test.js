import { currentURL, find, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';
import setupMapMocks from '../helpers/setup-map-mocks';


module('Acceptance | visit lot', function(hooks) {
  setupApplicationTest(hooks);
  setupMapMocks(hooks);

  test('visiting a lot', async function(assert) {
    await visit('/lot/1/1632/1');
    await percySnapshot('lot view');
    assert.notEqual(find('.content-area').textContent.length, 0);
  });

  test('visiting a bbl', async function(assert) {
    await visit('/bbl/1001870021');
    await percySnapshot('lot view');
    assert.equal(currentURL(), '/lot/1/187/21?layer-groups=%5B%22building-footprints%22%2C%22commercial-overlays%22%2C%22street-centerlines%22%2C%22subway%22%2C%22tax-lots%22%2C%22zoning-districts%22%5D');
    assert.notEqual(find('.content-area').textContent.length, 0);
  });
});
