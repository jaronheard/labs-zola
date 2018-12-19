import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import updateSelectionMixin from '../mixins/update-selection-zoning';

export default Route.extend(updateSelectionMixin, {
  mainMap: service(),
  model(params) {
    return {
      taskInstance: this.store.findRecord('special-purpose-subdistrict', params.id),
    };
  },
});
