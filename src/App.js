import React, { Component } from 'react';
import Home from './components/home';
import Sidenav from './components/sidenav';
import './css/bootstrap.css';
import './css/main.css';

class App extends Component {
  state = {
    closeSidenav: true,
    openSubmenu: false
  }
  //menu-sub-hidden main-hidden sub-hidden
  render() {
    const closeSidenav = this.state.closeSidenav; 
    console.log(closeSidenav);
    return (
      <div id="app" 
      className = { closeSidenav === true ? 'menu-sub-hidden main-hidden sub-hidden'  : 'menu-sub-hidden'}>
        <Sidenav />
        <nav className="navbar fixed-top">
          <div className="cursorOn d-flex align-items-center navbar-left">
            <button 
              onClick={ () => this.setState({closeSidenav: !closeSidenav}) }
              className="menu-button d-none d-md-block"
              href="/docs/gettingstarted/introduction">
              <div><svg className="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
                  <rect x="0.48" y="0.5" width="7" height="1"></rect>
                  <rect x="0.48" y="7.5" width="7" height="1"></rect>
                  <rect x="0.48" y="15.5" width="7" height="1"></rect>
                </svg><svg className="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                  <rect x="1.56" y="0.5" width="16" height="1"></rect>
                  <rect x="1.56" y="7.5" width="16" height="1"></rect>
                  <rect x="1.56" y="15.5" width="16" height="1"></rect>
                </svg></div>
            </button>
            <a className="menu-button-mobile d-xs-block d-sm-block d-md-none" href="/docs/gettingstarted/introduction"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
                <rect x="0.5" y="0.5" width="25" height="1"></rect>
                <rect x="0.5" y="7.5" width="25" height="1"></rect>
                <rect x="0.5" y="15.5" width="25" height="1"></rect>
              </svg></a></div><a className="navbar-logo" href="/"><span className="logo d-none d-xs-block"></span><span
              className="logo-mobile d-block d-xs-none"></span></a>
          <div className="navbar-right">
            <div className="header-icons d-inline-block align-middle mr-0">
              <div className="position-relative d-none d-none d-lg-inline-block"><a
                  className="btn btn-outline-primary btn-sm mb-2 mr-3" target="_blank"
                  href="https://1.envato.market/5kAb"><span>Buy Now</span></a></div><button
                className="header-icon btn btn-empty" type="button" id="fullScreenButton"><i
                  className="simple-icon-size-fullscreen d-block"></i></button>
            </div>
            <div className="user d-inline-block"></div>
          </div>
        </nav>
        <main>
          <Home />
        </main>
      </div>
    )
  }
}

export default App;