import React from 'react';
import './index.scss';

const Header = () => (
  <div>
    <div className="content-wrapper">
      <div className="navmenu">
        <form action="/search" autoComplete="off" id="search-form" method="get">
          <input name="q" placeholder="Search here..." size="15" type="text" />
          <input id="button-submit" type="submit" value="Search" />
        </form>
        {/* <span id='menu'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC9JREFUeNpi/P//PwM1AQsQU9VEJgYqg8FvICgMGUeel0eTzWiyGU02Qz/ZAAQYAOPcBjEdYroKAAAAAElFTkSuQmCC'  /></span> */}
        <nav id="navbar" itemProp="mainEntity" itemScope="itemscope" itemType="https://schema.org/SiteNavigationElement">
          <ul className="navbar">
            <li><a href="/" itemProp="url" title="Home"><span itemProp="name">Home</span></a></li>
            <li id="sub-menu">
              <span itemProp="name">Categories</span>
              <ul className="sub-menu">
                <li><a href="/" itemProp="url" title="Home"><span itemProp="name">Electronics</span></a></li>
                <li><a href="/" itemProp="url" title="Home"><span itemProp="name">Mobile</span></a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div style={{ clear: 'both' }} />
  </div>
);
export default Header;
