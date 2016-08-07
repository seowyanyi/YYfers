import {INIT_APP, UPDATE_APP, INCREASE_BAL} from '../constants';
import assign from 'object-assign';

export default function app(state = {}, action) {
  switch (action.type) {
    case INIT_APP:
      return action.app;
    case UPDATE_APP:
      return assign({}, state, action.app)
    case INCREASE_BAL:
      let newBal = state.balance + action.amount
      return assign({}, state, {balance: newBal})
    default:
      return state;
  }
}