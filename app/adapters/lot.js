import DS from 'ember-data';
import { buildSqlUrl } from '../utils/carto';
import { LotColumnsSQL } from '../models/lot';

const SQL = function(id) {
  return `SELECT ${LotColumnsSQL.join(',')}, 
    st_x(st_centroid(the_geom)) as lon, st_y(st_centroid(the_geom)) as lat,
    the_geom, bbl AS id FROM mappluto_18v2 WHERE bbl=${id}`;
};

export default DS.JSONAPIAdapter.extend({
  keyForAttribute(key) {
    return key;
  },
  urlForFindRecord(id) {
    return buildSqlUrl(
      SQL(id),
      'geojson',
    );
  },
});
