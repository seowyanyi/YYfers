import React, { Component, PropTypes } from 'react';
import {floatToSGD} from '../helper'

class Sidebar extends Component {
  render() {
    const {app} = this.props;
    return (
      <aside className="main-sidebar">

          {/* sidebar: style can be found in sidebar.less */}
          <section className="sidebar">

            {/* Sidebar user panel (optional) */}
            <div className="user-panel">
              <div className="pull-left image">
                <img src="user-outline.png" className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>{app.name}</p>
                <p>Balance: {floatToSGD(app.balance)}</p>
              </div>
            </div>


            {/* Sidebar Menu */}
            <ul className="sidebar-menu">
              <li className="header">HEADER</li>
              {/* Optionally, you can add icons to the links */}
              <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Link</span></a></li>
              <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
              <li className="treeview">
                <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="#">Link in level 2</a></li>
                  <li><a href="#">Link in level 2</a></li>
                </ul>
              </li>
            </ul>
            {/* /.sidebar-menu */}
          </section>
          {/* /.sidebar */}
        </aside>

      )
  }
}

export default Sidebar;