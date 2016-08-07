// Content Wrapper. Contains page content
import React, { Component, PropTypes } from 'react';

class Content extends Component {
  render() {
    return (
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Page Header
        <small>Optional description</small>
      </h1>

    </section>

    {/* Main content */}
    <section className="content">

      {/* Your Page Content Here */}

    </section>
    {/* /.content */}
  </div>

      )
  }
}


export default Content;