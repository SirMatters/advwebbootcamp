import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
  static defaultProps = {
    onNew() {}
  }

  render() {
    return (
      <div className="NavBar">
        <p className="logo">Recipe.io</p>
        <ul className="Navs">
          <li
            onClick={this.props.onNew}
          >
            New Recipe
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    )
  }
}

export default NavBar;