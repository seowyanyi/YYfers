import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import DashboardApp from './DashboardApp';
import configureStore from '../store/configureStore';
import {initApp} from '../actions/app'

const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(initApp({
      balance: parseFloat(this.props.balance),
      email: this.props.email,
      name: this.props.name,
      created_at: this.props.created_at,
      csrf_token: this.props.csrf_token
    }));
  }
  render() {
    return (
      <Provider store={store}>
        <DashboardApp />
      </Provider>
    );
  }
}