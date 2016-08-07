import {INIT_APP} from '../constants';

export function initApp(app) {
  return {
    type: INIT_APP,
    app: app
  }
}