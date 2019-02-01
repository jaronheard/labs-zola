import Component from '@ember/component';
import { intersect } from '@ember-decorators/object/computed';
import { action, computed } from '@ember-decorators/object';

export default class GroupedCheckboxesComponent extends Component {
  layerGroup;

  selected;

  group;

  @computed('group.codes.length')
  get hasMany() {
    return (this.get('group.codes.length') > 1);
  }

  @intersect('selected', 'group.codes')
  selectedInGroup;

  @computed('selectedInGroup', 'group', 'selected')
  get isIndeterminateGroup() {
    const {
      selectedInGroup,
      group,
    } = this;

    return (selectedInGroup.length > 0) && (selectedInGroup.length < group.codes.length);
  }

  @action
  addOrRemoveMultiple(needles, haystack) {
    if (haystack.any(hay => needles.includes(hay))) {
      haystack.removeObjects(needles);
    } else {
      haystack.pushObjects(needles);
    }
  }

  @action
  addOrRemove(needle, haystack) {
    if (haystack.includes(needle)) {
      haystack.removeObject(needle);
    } else {
      haystack.pushObject(needle);
    }
  }
}
