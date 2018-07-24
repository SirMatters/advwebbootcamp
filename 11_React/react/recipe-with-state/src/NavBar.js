import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }

  render() {
    return(
      <header>
        <h2>Recipe.io</h2>
        <nav>
          <li onClick={this.props.onNewRecipe}>Add New</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </nav>
      </header>
    )
  }
}

export default NavBar;