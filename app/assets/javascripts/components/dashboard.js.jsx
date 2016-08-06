var Dashboard = React.createClass({

  render: function() {

    return (
<div className="hold-transition skin-blue sidebar-mini wrapper">

  {/* Main Header */}
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
                  <a href="#" className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </nav>
  </header>
  {/* Left side column. contains the logo and sidebar */}
  <aside className="main-sidebar">

    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">

      {/* Sidebar user panel (optional) */}
      <div className="user-panel">
        <div className="pull-left image">
          <img src="user-outline.png" className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>
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

  {/* Content Wrapper. Contains page content */}
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
  {/* /.content-wrapper */}

  {/* Main Footer */}
  <footer className="main-footer">
    {/* To the right */}
    <div className="pull-right hidden-xs">
      Anything you want
    </div>
    {/* Default to the left */}
    <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
  </footer>

</div>

    );
  }
});
