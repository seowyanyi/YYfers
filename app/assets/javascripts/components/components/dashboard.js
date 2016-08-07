import React, { Component, PropTypes } from 'react';
import Header from './header'
import Sidebar from './sidebar'
import Content from './content'
import Footer from './footer'

class Dashboard extends Component {
  render() {
    return (
      <div className="hold-transition skin-blue sidebar-mini wrapper">
        <Header app={this.props.app} />
        <Sidebar app={this.props.app}/>
        <Content />
        <Footer />
      </div>
    );
  }
}


export default Dashboard;