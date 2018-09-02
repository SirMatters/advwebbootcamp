import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList'
import NavBar from './NavBar';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state= {
      recipes: [
        {
          id: 0,
          title : 'pasta',
          ingredients : ['flour', 'water'],
          instructions : "Mix all",
          img : "https://cdn.fishki.net/upload/post/201408/19/1295477/8_2.jpg"
        },
        {
          id: 1,
          title : 'More pasta',
          ingredients : ['flour', 'water'],
          instructions : "Mix all",
          img : "https://cdn.fishki.net/upload/post/201408/19/1295477/8_2.jpg"
        },
        {
          id: 2,
          title : 'More more pasta',
          ingredients : ['flour', 'water'],
          instructions : "Mix all",
          img : "https://cdn.fishki.net/upload/post/201408/19/1295477/8_2.jpg"
        }
      ],
      nextId: 3

    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;