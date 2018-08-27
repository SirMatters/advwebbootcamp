import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';
import RecipeList from './RecipeList'
import NavBar from './NavBar';

class RecipeApp extends Component {
  static defaultProps = {
    recipes: [
      {
        title : 'pasta',
        ingredients : ['flour', 'water'],
        instructions : "Mix all",
        img : "https://cdn.fishki.net/upload/post/201408/19/1295477/8_2.jpg"
      },
      {
        title : 'More pasta',
        ingredients : ['flour', 'water'],
        instructions : "Mix all",
        img : "https://cdn.fishki.net/upload/post/201408/19/1295477/8_2.jpg"
      },
      {
        title : 'More more pasta',
        ingredients : ['flour', 'water'],
        instructions : "Mix all",
        img : "https://cdn.fishki.net/upload/post/201408/19/1295477/8_2.jpg"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeList recipes={this.props.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;
