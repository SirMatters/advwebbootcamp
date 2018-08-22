import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';
import NavBar from './NavBar';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Recipe
          title = 'pasta'
          ingredients = {['flour', 'water']}
          instructions = "Mix all"
          img = "https://cdn.fishki.net/upload/post/201408/19/1295477/8_2.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
