import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import * as Actions from '../actions/app';

function mapStateToProps(state) {
  return {
    app: state.app
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
