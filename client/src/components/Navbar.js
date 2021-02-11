import React from 'react';
import { Link } from 'react-router-dom';


export default class Nav2 extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <Link to="/" className="Nav__brand">
            {/* <img src="logo.svg" className="Nav__logo" alt="logo name" /> */}
          </Link>

          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" to="/">Home</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/All"> Explore</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/Random">Customer support</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/map">About us</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/Random">Offers</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/Random">Offers</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/Random">Offers</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/Random">Offers</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}