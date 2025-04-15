import React from 'react'
import logo from "../../assets/images/icons/logo-sm.png";
import search from "../../assets/images/icons/search-icon-sm.png";
import cart from "../../assets/images/icons/cart-sm.png"
import styles from "./Header.module.css"
const Header = () => {
  return (
    <div>
      <div className={` fixed-top ${styles.navWrapper}`}>
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-lg">
            <button
              className={`navbar-toggler ${styles.navbarToggler}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              ☰
            </button>

            <a className="navbar-brand mx-auto mb-2 me-3 pe-1" href="#">
              <img src={logo} />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className={`nav-item ${styles.navItems}`}>
                  <a className="nav-link js-scroll-trigger" href="/mac/">
                    Mac
                  </a>
                </li>
                <li className={`nav-item ${styles.navItems}`}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    iphone
                  </a>
                </li>
                <li className={`nav-item ${styles.navItems}`}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    ipad
                  </a>
                </li>
                <li className={`nav-item ${styles.navItems}`}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    watch
                  </a>
                </li>
                <li className={`nav-item ${styles.navItems}`}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    tv
                  </a>
                </li>
                <li className={`nav-item ${styles.navItems}`}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    Music
                  </a>
                </li>
                <li className={`nav-item ${styles.navItems}`}>
                  <a className="nav-link js-scroll-trigger" href="#">
                    Support
                  </a>
                </li>
                <li className={`nav-item ${styles.navItems}`}>
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} />
                  </a>
                </li>
                <li className={`nav-item ${styles.navItems}`}>
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header
