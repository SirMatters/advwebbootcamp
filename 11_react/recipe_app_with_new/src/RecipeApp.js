import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList'
import NavBar from './NavBar';
import RecipeForm from './RecipeForm';

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
      nextId: 3,
      showForm: false
    }
  }

  handleSave(recipe) {
    this.setState((previousState, props) => {
      const newRecipe = {...recipe, id: this.state.nextId};
      return {
        recipes: [...this.state.recipes, newRecipe],
        nextId: previousState.nextId + 1,
        showForm: false
      }
    });
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <NavBar />
        {
          showForm ?
          <RecipeForm
            onSave={this.handleSave}
            onClose={() => this.setState({showForm: true})}
          /> :
          null
        }
        <RecipeList
          recipes={this.state.recipes}
        />
      </div>
    );
  }
}

export default RecipeApp;