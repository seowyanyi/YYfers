import {INIT_APP} from '../constants';

export default function app(state = {}, action) {
  switch (action.type) {
  case INIT_APP:
    return action.app;
  default:
    return state;
  }
}