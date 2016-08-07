import React, { Component, PropTypes } from 'react';

function getPageHeader() {
  if (window.location.pathname.indexOf("paylinks")!== -1) {
    return "Paylinks"
  } else if (window.location.pathname.indexOf("transactions")!== -1){
    return "Transactions"
  } else {
    return "Home"
  }
}

class Content extends Component {
  render() {
    return (
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        {getPageHeader()}
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