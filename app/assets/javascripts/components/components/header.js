import React, { Component, PropTypes } from 'react';

class Header extends Component {
  signOut() {
    $.ajax({
        url: '/logout',
        type: 'DELETE',
        success: function(result) {
        },
        error: function(err) {
          console.log(err)
        }
    });

  }

  render() {
    const {app} = this.props;
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
    let date = new Date(app.created_at)
    let dateString = monthNames[date.getMonth()] + " " + date.getFullYear()
    return (
      
  <header className="main-header">
    {/* Logo */}
    <div className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini"><b>YY</b>fers</span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg"><b>YY</b>fers</span>
    </div>

    {/* Header Navbar */}
    <nav className="navbar navbar-static-top" role="navigation">
      {/* Sidebar toggle button*/}
      <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      {/* Navbar Right Menu */}
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
             
          {/* User Account Menu */}
          <li className="dropdown user user-menu">
            {/* Menu Toggle Button */}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              {/* The user image in the navbar*/}
              <img src="user-outline.png" className="user-image" alt="User Image" />
              {/* hidden-xs hides the username on small devices so only the image appears. */}
              <span className="hidden-xs">{app.name}</span>
            </a>
            <ul className="dropdown-menu">
              {/* The user image in the menu */}
              <li className="user-header">
                <img src="user-outline.png" className="img-circle" alt="User Image" />

                <p>
                  {app.name}
                  <small>Member since {dateString}</small>
                </p>
              </li>
              {/* Menu Footer*/}
              <li className="user-footer">
                <div className="pull-left">
                  <a href="#" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a onClick={this.signOut} className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </nav>
  </header>
      )
  }
}

export default Header;
