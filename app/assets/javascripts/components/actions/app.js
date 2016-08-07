import {INIT_APP, UPDATE_APP, INCREASE_BAL} from '../constants';

export function initApp(app) {
  return {
    type: INIT_APP,
    app: app
  }
}

export function updateApp(app) {
  return {
    type: UPDATE_APP,
    app: app
  }
}

export function increaseBalance(amount) {
  return {
    type: INCREASE_BAL,
    amount: amount
  }
}

export function addMoney(data) {
  return function (dispatch) {
    $.post('/transactions', data).done(function(msg) {
      let amt = data.transaction.amount
      dispatch(increaseBalance(amt))
      $.bootstrapGrowl("Added $" + amt  + " to your bank!", {
        type: 'success', // (null, 'info', 'danger', 'success')
        allow_dismiss: true, // If true then will display a cross to close the popup.
      });

    }).fail(function(xhr, status, err) {
      let resText = xhr.responseText
      let failureCause = 'Error'
      if (resText.indexOf("must be less than") !== -1) {
        failureCause = 'You are too greedy'
      }
      $.bootstrapGrowl(failureCause, {
        type: 'danger', // (null, 'info', 'danger', 'success')
        allow_dismiss: true, // If true then will display a cross to close the popup.
      });      
    })
  }
}