import { visit,
  click,
  fillIn,
  find,
  findAll,
  triggerKeyEvent,
  waitUntil,
  currentURL,
  triggerEvent,
  pauseTest,
} from '@ember/test-helpers';
import { module, skip, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMapMocks from '../helpers/setup-map-mocks';
import { percySnapshot } from 'ember-percy';

const SEARCH_INPUT_SELECTOR = '.map-search-input';
const SEARCH_RESULTS_SELECTOR = '.search-results';
const LOT_URL_ROOT = '/lot';
const SEARCH_TERM_LOT = '1000477501';
const SEARCH_TERM_ADDRESS = '210 Humboldt Street, Brooklyn, New York, NY, USA';
const SEARCH_RESULT_LABEL = '210 HUMBOLDT STREET, Brooklyn, New York, NY, USA';
const SEARCH_RESULTS_LOADING_CLASS = '.search-results--loading';
const FONT_AWESOME_MAP_PIN = '.fa-map-pin';
const timeout = 15000;
const resultAt = function(x) {
  return `${SEARCH_RESULTS_SELECTOR} li:nth-child(${x + 1})`;
};

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  setupMapMocks(hooks);

  test('map-search enter on first search result', async function(assert) {
    await visit('/');
    await fillIn(SEARCH_INPUT_SELECTOR, SEARCH_TERM_LOT);
    await percySnapshot('searches');
    await waitUntil(() => find('.has-results'), { timeout });
    await click('.result');
    await percySnapshot('clicks result');

    assert.equal(
      (currentURL().indexOf('/') > -1),
      true,
    );
  });

  test('map-search keydown, keyup, keyup -> first result highlighted', async function(assert) {
    await visit('/');
    await fillIn(SEARCH_INPUT_SELECTOR, SEARCH_TERM_LOT);
    await waitUntil(() => find('.has-results'), { timeout });
    await triggerKeyEvent(SEARCH_INPUT_SELECTOR, 'keyup', 40);
    await triggerKeyEvent(SEARCH_INPUT_SELECTOR, 'keyup', 38);
    await triggerKeyEvent(SEARCH_INPUT_SELECTOR, 'keyup', 38);

    assert.equal(
      (find(resultAt(1)).className.indexOf('highlighted-result') > -1),
      true,
    );
  });

  // this is a flakey test - it's also testing addon behavior. We should keep addon tests separate. 
  skip('Map search: hide result list on focus out, persist search result label', async function(assert) {
    await visit('/');
    await fillIn(SEARCH_INPUT_SELECTOR, SEARCH_TERM_ADDRESS);
    await click(SEARCH_INPUT_SELECTOR);
    await waitUntil(() => find('.has-results'), { timeout });

    assert.ok(
      find('.focused'),
    );

    await click(find(resultAt(1)));

    assert.notOk(
      find('.focused'),
    );

    assert.equal(
      find(SEARCH_INPUT_SELECTOR).value,
      SEARCH_RESULT_LABEL,
    );
  });
});
