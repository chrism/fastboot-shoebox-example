import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  fastboot: service(),

  model() {
    return this.get("fastboot.shoebox").retrieve("assets");
  }
});
