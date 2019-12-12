import React from 'react';

const Sidenav = () => (
  <div className="sidebar">
  <div className="main-menu">
    <div className="scroll">
      <div className="scrollbar-container ps">
        <ul className="list-unstyled nav flex-column">
          <li className="active nav-item"><a className="active" aria-current="page" data-flag="gettingstarted"
              href="/docs/gettingstarted"><i className="iconsminds-air-balloon-1"></i> <span>Getting Started</span></a></li>
          <li className="nav-item"><a data-flag="codebase" href="/docs/codebase"><i
                className="iconsminds-add-space-before-paragraph"></i> <span>Codebase</span></a></li>
          <li className="nav-item"><a data-flag="guide-list" href="/docs/guide-list"><i className="iconsminds-blackboard"></i>
              <span>Guides</span></a></li>
          <li className="nav-item"><a href="https://1.envato.market/5kAb" rel="noopener noreferrer" target="_blank"><i
                className="iconsminds-add-basket"></i> <span>Buy Now</span></a></li>
        </ul>
        <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}>
          <div className="ps__thumb-x" tabindex="0" style={{left: '0px', width: '0px'}}></div>
        </div>
        <div className="ps__rail-y" style={{top: '0px', height: '225px', right: '0px'}}>
          <div className="ps__thumb-y" tabindex="0" style={{top: '0px', height: '115px'}}></div>
        </div>
      </div>
    </div>
  </div>
  <div className="sub-menu">
    <div className="scroll">
      <div className="scrollbar-container ps">
        <ul data-parent="gettingstarted" className="d-block nav">
          <li className="nav-item active"><a className="active" aria-current="page" href="/docs/gettingstarted/introduction"><i
                className="simple-icon-control-play"></i> <span>Introduction</span></a></li>
          <li className="nav-item"><a href="/docs/gettingstarted/development"><i className="simple-icon-chemistry"></i>
              <span>Development</span></a></li>
          <li className="nav-item"><a href="/docs/gettingstarted/structure"><i className="simple-icon-folder"></i>
              <span>Structure</span></a></li>
          <li className="nav-item"><a href="/docs/gettingstarted/changelog"><i className="simple-icon-shuffle"></i>
              <span>Changelog</span></a></li>
        </ul>
        <ul data-parent="codebase" className="nav">
          <li className="nav-item"><a href="/docs/codebase/files"><i className="simple-icon-doc"></i> <span>Files</span></a>
          </li>
          <li className="nav-item"><a href="/docs/codebase/styling"><i className="simple-icon-magic-wand"></i>
              <span>Styling</span></a></li>
          <li className="nav-item"><a href="/docs/codebase/theming"><i className="simple-icon-energy"></i>
              <span>Theming</span></a></li>
          <li className="nav-item"><a href="/docs/codebase/menu"><i className="simple-icon-drawer"></i> <span>Menu</span></a>
          </li>
          <li className="nav-item"><a href="/docs/codebase/libraries"><i className="simple-icon-puzzle"></i>
              <span>Libraries</span></a></li>
        </ul>
        <ul data-parent="guide-list" className="nav"></ul>
        <ul data-parent="buy" className="nav"></ul>
        <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}>
          <div className="ps__thumb-x" tabindex="0" style={{left: '0px', width: '0px'}}></div>
        </div>
        <div className="ps__rail-y" style={{top: '0px', right: '0px'}}>
          <div className="ps__thumb-y" tabindex="0" style={{top: '0px', height: '0px'}}></div>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default Sidenav;