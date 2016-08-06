var Header = React.createClass({
  signOut: function() {
    $.ajax({
        url: '/logout',
        type: 'DELETE',
        success: function(result) {
            // Do something with the result
            console.log(result)
        },
        error: function(err) {
          console.log(err)
        }
    });

  },

  render: function() {
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
              <span className="hidden-xs">Alexander Pierce</span>
            </a>
            <ul className="dropdown-menu">
              {/* The user image in the menu */}
              <li className="user-header">
                <img src="user-outline.png" className="img-circle" alt="User Image" />

                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
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
});
