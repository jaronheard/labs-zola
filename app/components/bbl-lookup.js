import Ember from 'ember';
import carto from '../utils/carto';

import { computed } from 'ember-decorators/object'; // eslint-disable-line

import trackEvent from '../utils/track-event'; // eslint-disable-line

const { service } = Ember.inject;

export default Ember.Component.extend({
  classNames: ['bbl-lookup hide-for-print'],
  boroOptions: [
    { name: 'Manhattan (1)', code: '1' },
    { name: 'Bronx (2)', code: '2' },
    { name: 'Brooklyn (3)', code: '3' },
    { name: 'Queens (4)', code: '4' },
    { name: 'Staten Island (5)', code: '5' },
  ],
  boro: '',
  block: '',
  lot: '',
  mainMap: service(),
  metrics: service(),
  focused: false,
  errorMessage: '',
  closed: true,

  actions: {
    checkBBL() {
      const { boro: { code }, block, lot } = this.getProperties('boro', 'block', 'lot');

      const uniqueSQL = `select bbl from support_mappluto where block= ${block} and lot = ${lot} and borocode = ${code}`;
      carto.SQL(uniqueSQL).then((response) => {
        if (response[0]) {
          this.set('errorMessage', '');
          this.setProperties({
            selected: 0,
            focused: false,
            closed: true,
          });

          this.transitionTo('lot', code, block, lot);
        } else {
          this.set('errorMessage', 'BBL doesn\'t exist');
        }
      });
    },

    setBorocode(option) {
      this.set('boro', option);
    },
  },
});
