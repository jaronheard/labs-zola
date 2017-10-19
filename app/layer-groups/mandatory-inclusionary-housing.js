import { lineStyle, fillStyle } from '../utils/polygon-layer-styles';

const legendColor = '#CC3D5D';

export default {
  id: 'mandatory-inclusionary-housing',
  title: 'Mandatory Inclusionary Housing Areas',
  titleTooltip: 'Areas where developments, enlargements and conversions over a certain size are required to set aside a percentage of floor area for permanently affordable housing',
  visible: false,
  legendIcon: 'polygon',
  legendColor,
  layers: [
    {
      layer: lineStyle('mandatory-inclusionary-housing-line', 'supporting-zoning', 'mandatory-inclusionary-housing', legendColor),
    },

    {
      layer: fillStyle('mandatory-inclusionary-housing-fill', 'supporting-zoning', 'mandatory-inclusionary-housing', legendColor),
      highlightable: true,
      tooltipTemplate: '{{projectnam}} - {{mih_option}}',
    },
  ],
};
