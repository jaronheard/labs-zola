export default {
  id: 'supporting-zoning',
  type: 'cartovector',
  'source-layers': [
    {
      id: 'special-purpose-districts',
      sql: 'SELECT the_geom_webmercator, cartodb_id, sdlbl, sdname FROM special_purpose_districts',
    },
    {
      id: 'special-purpose-subdistricts',
      sql: 'SELECT the_geom_webmercator, splbl, cartodb_id, spname, subdist FROM special_purpose_subdistricts',
    },
    {
      id: 'mandatory-inclusionary-housing',
      sql: 'SELECT the_geom_webmercator, projectnam, mih_option FROM mandatory_inclusionary_housing',
    },
    {
      id: 'inclusionary-housing',
      sql: 'SELECT the_geom_webmercator, projectnam FROM inclusionary_housing',
    },
    {
      id: 'transit-zones',
      sql: 'SELECT the_geom_webmercator FROM transitzones',
    },
    {
      id: 'fresh',
      sql: 'SELECT the_geom_webmercator, name FROM fresh_zones',
    },
    {
      id: 'sidewalk-cafes',
      sql: 'SELECT the_geom_webmercator, cafetype FROM sidewalk_cafes',
    },
    {
      id: 'low-density-growth-mgmt-areas',
      sql: 'SELECT the_geom_webmercator FROM lower_density_growth_management_areas',
    },
    {
      id: 'coastal-zone-boundary',
      sql: 'SELECT the_geom_webmercator FROM coastal_zone_boundary',
    },
    {
      id: 'waterfront-access-plan',
      sql: 'SELECT the_geom_webmercator, name FROM waterfront_access_plan',
    },
    {
      id: 'zoning-map-amendments-pending',
      sql: 'SELECT the_geom_webmercator, ulurpno, status, project_na FROM zoning_map_amendments WHERE status = \'Certified\'',
    },
    {
      id: 'limited-height-districts',
      sql: 'SELECT the_geom_webmercator, lhlbl FROM limited_height_districts',
    },
    {
      id: 'business-improvement-districts',
      sql: 'SELECT the_geom_webmercator, bid FROM business_improvement_districts_v0',
    },
    {
      id: 'e-designations',
      sql: 'SELECT the_geom_webmercator, bbl, ceqr_num, enumber, ulurp_num FROM e_designations',
    },
    {
      id: 'industrial-business-zones',
      sql: 'SELECT the_geom_webmercator, name FROM industrial_business_zones_v20180501',
    },
    {
      id: 'appendixj-designated-mdistricts',
      sql: 'SELECT the_geom_webmercator, name, subarea FROM appendixj_designated_mdistricts',
    },
  ],
};
