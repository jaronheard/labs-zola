import { module, skip } from 'qunit';
import {
  visit, click, typeIn, currentURL,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import mapboxGlLoaded from '../helpers/mapbox-gl-loaded';
import setupMapMocks from '../helpers/setup-map-mocks';

module('Acceptance | bbl lookup', function(hooks) {
  setupApplicationTest(hooks);
  setupMapMocks(hooks);

  skip('BBL lookup works', async function(assert) {
    await visit('/');
    await mapboxGlLoaded();
    await click('.bbl-lookup-toggle');
    await click('.bbl-power-select .ember-power-select-trigger');

    await click('.ember-power-select-options li:nth-child(3)');

    await typeIn('.bbl-lookup--block-input', '1');
    await typeIn('.bbl-lookup--lot-input', '1');

    await click('.bbl-lookup-form .button');

    assert.equal(currentURL().split('?')[0], '/lot/3/1/1');
  });
});
