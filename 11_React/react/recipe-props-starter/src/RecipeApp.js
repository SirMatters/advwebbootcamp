import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import './RecipeApp.css'

class RecipeApp extends Component {
  render() {
    return (
      <Recipe 
      title='pasta' 
      ingredients={['flour', 'water']}
      instructions = "Mix ingredients"
      img='spaghetti.jpeg'
      />
    );
  }
}

export default RecipeApp;
